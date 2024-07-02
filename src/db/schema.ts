import { sql } from 'drizzle-orm';
import { integer, pgTable, primaryKey, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const BucketTable = pgTable('buckets_table', {
  bucketId: uuid('bucket_id').default(sql`gen_random_uuid()`).primaryKey(),
  name: text('bucket_name').default(''),
  description: text('bucket_description').default(''),
  bouds: text('bucket_bounds').default(''),
  slug: text('bucket_slug').default(''),
  user: uuid('bucket_user').notNull(),
  createdAt: timestamp('created_at')
});

export const PlaceTable = pgTable('places_table', {
  placeId: text('place_id').notNull().primaryKey(),
  name: text('place_name').notNull()
});

export const BucketList = pgTable('bucket_list', {
  bucketListId: uuid('bucket_list_id').default(sql`gen_random_uuid()`).unique(),
  bucketId: uuid('bucket_id').references(() => BucketTable.bucketId),
  description: text('text').default(''),
  icon: text('bucket_icon').default('🗾'),
  createdAt: timestamp('created_at')
}, (table) => {
  return {
    'bucketListPk': primaryKey({
      name: 'bucketListPk',columns: [table.bucketListId, table.bucketId] })
  }
});

export const BucketListToPlaces = pgTable('bucket_list_to_place', {
  bucketListId: uuid('bucket_list_id').notNull().references(() => BucketList.bucketListId),
  placeId: text('place_id').notNull().references(() => PlaceTable.placeId),
}, (table) => {
  return {
    'bucketLisToPlacePK': primaryKey({ name: 'bucketLisToPlacePK', columns: [table.bucketListId, table.placeId] })
  }
});