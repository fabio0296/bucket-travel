import { sql } from 'drizzle-orm';
import { pgTable, primaryKey, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const BucketTable = pgTable('buckets_table', {
  bucketId: uuid('bucket_id').default(sql`gen_random_uuid()`).primaryKey(),
  name: text('bucket_name').default(''),
  description: text('bucket_description').default(''),
  bouds: text('bucket_bounds').default(''),
  slug: text('bucket_slug').default(''),
  user: uuid('bucket_user').notNull(),
  background: text('bucket_background').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const PlaceTable = pgTable('places_table', {
  placeId: text('place_id').notNull().primaryKey(),
  name: text('place_name').notNull()
});

export const BucketList = pgTable('bucket_list_table', {
  bucketListId: uuid('bucket_list_id').default(sql`gen_random_uuid()`).unique(),
  bucketId: uuid('bucket_id').references(() => BucketTable.bucketId),
  description: text('text').default(''),
  icon: text('bucket_icon').default('🗾'),
  createdAt: timestamp('created_at').defaultNow()
}, (table) => {
  return {
    'bucketListPk': primaryKey({
      name: 'bucket_list_pk',columns: [table.bucketListId, table.bucketId] })
  }
});

export const BucketListToPlaces = pgTable('bucket_list_to_place_table', {
  bucketListId: uuid('bucket_list_id').notNull().references(() => BucketList.bucketListId),
  placeId: text('place_id').notNull().references(() => PlaceTable.placeId),
  createdAt: timestamp('created_at').defaultNow()
}, (table) => {
  return {
    'bucketLisToPlacePK': primaryKey({ name: 'bucket_list_place_PK', columns: [table.bucketListId, table.placeId] })
  }
});