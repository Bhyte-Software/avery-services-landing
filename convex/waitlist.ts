import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const join = mutation({
    args: { email: v.string() },
    handler: async (ctx, args) => {
        const email = args.email.toLowerCase().trim();

        // Check if email already exists
        const existing = await ctx.db
            .query("waitlist")
            .withIndex("by_email", (q) => q.eq("email", email))
            .first();

        if (existing) {
            return { success: true, alreadyJoined: true };
        }

        await ctx.db.insert("waitlist", {
            email,
            joinedAt: Date.now(),
        });

        return { success: true, alreadyJoined: false };
    },
});
