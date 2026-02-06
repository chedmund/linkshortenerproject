import { pgTable, integer, varchar, text, timestamp, index } from 'drizzle-orm/pg-core';

export const links = pgTable(
    'links',
    {
        id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
        userId: varchar('user_id', { length: 255 }).notNull(),
        originalUrl: text('original_url').notNull(),
        shortCode: varchar('short_code', { length: 10 }).notNull().unique(),
        createdAt: timestamp('created_at', { mode: 'date', withTimezone: true }).notNull().defaultNow(),
        updatedAt: timestamp('updated_at', { mode: 'date', withTimezone: true }).notNull().defaultNow(),
    },
    (table) => ({
        userIdIdx: index('user_id_idx').on(table.userId),
    })
);

export type Link = typeof links.$inferSelect;
export type NewLink = typeof links.$inferInsert;