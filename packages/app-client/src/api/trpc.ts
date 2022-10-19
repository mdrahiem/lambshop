import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "app-server";

export const trpc = createReactQueryHooks<AppRouter>();
