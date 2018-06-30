import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { Model } from 'objection';

declare abstract class SchemaBuilder {
  model(model: typeof Model, opts?: {
    listFieldName?: string;
    fieldName?: string;
  }): SchemaBuilder;
  allModels(models: (typeof Model)[]): SchemaBuilder;
  extendWithModelMutations(): SchemaBuilder;
  extendWithModelSubscriptions(): SchemaBuilder;
  extendWithMutations(input: GraphQLObjectType | ((builder: SchemaBuilder) => GraphQLObjectType)): SchemaBuilder;
  extendWithSubscriptions(input: GraphQLObjectType | ((builder: SchemaBuilder) => GraphQLObjectType)): SchemaBuilder;
  build(): GraphQLSchema;
}

declare function builder(): SchemaBuilder;
