import { ObjectId } from "mongodb";
import { z } from "zod";

import clientPromise from "@/lib/mongodb";
import { withErrorHandler } from "@/lib/error-handler";

const todoSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100, "Title must not exceed 100 characters"),

  completed: z.boolean().default(false),
});

const updateTodoSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title cannot be empty")
      .max(100, "Title must not exceed 100 characters")
      .optional(),

    completed: z.boolean().optional(),
  })
  .refine(
    (data) =>
      data.title !== undefined ||
      data.completed !== undefined,
    {
      message: "At least one field is required for update",
    }
  );

async function getCollection() {
  const client = await clientPromise;

  const db = client.db("todo_app");

  return db.collection("todos");
}

/*
  GET /api/todos

  Get all todos
*/
export const GET = withErrorHandler(async () => {
  const collection = await getCollection();

  const todos = await collection
    .find({})
    .sort({ _id: -1 })
    .toArray();

  const formattedTodos = todos.map((todo) => ({
    id: todo._id.toString(),
    title: todo.title,
    completed: todo.completed,
  }));

  return Response.json(
    {
      success: true,
      data: formattedTodos,
    },
    { status: 200 }
  );
});

/*
  POST /api/todos

  Create a new todo
*/
export const POST = withErrorHandler(async (request) => {
  const body = await request.json();

  const validatedData = todoSchema.parse(body);

  const collection = await getCollection();

  const newTodo = {
    title: validatedData.title,
    completed: validatedData.completed,
    createdAt: new Date(),
  };

  const result = await collection.insertOne(newTodo);

  return Response.json(
    {
      success: true,
      message: "Todo created successfully",
      data: {
        id: result.insertedId.toString(),
        ...newTodo,
      },
    },
    { status: 201 }
  );
});

/*
  PATCH /api/todos?id=TODO_ID

  Update an existing todo
*/
export const PATCH = withErrorHandler(async (request) => {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (!id || !ObjectId.isValid(id)) {
    return Response.json(
      {
        success: false,
        message: "Valid todo id is required",
      },
      { status: 400 }
    );
  }

  const body = await request.json();

  const validatedData = updateTodoSchema.parse(body);

  const collection = await getCollection();

  const result = await collection.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        ...validatedData,
        updatedAt: new Date(),
      },
    },
    {
      returnDocument: "after",
    }
  );

  if (!result) {
    return Response.json(
      {
        success: false,
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  return Response.json(
    {
      success: true,
      message: "Todo updated successfully",
      data: {
        id: result._id.toString(),
        title: result.title,
        completed: result.completed,
      },
    },
    { status: 200 }
  );
});

/*
  DELETE /api/todos?id=TODO_ID

  Delete a todo
*/
export const DELETE = withErrorHandler(async (request) => {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (!id || !ObjectId.isValid(id)) {
    return Response.json(
      {
        success: false,
        message: "Valid todo id is required",
      },
      { status: 400 }
    );
  }

  const collection = await getCollection();

  const result = await collection.deleteOne({
    _id: new ObjectId(id),
  });

  if (result.deletedCount === 0) {
    return Response.json(
      {
        success: false,
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  return Response.json(
    {
      success: true,
      message: "Todo deleted successfully",
    },
    { status: 200 }
  );
});