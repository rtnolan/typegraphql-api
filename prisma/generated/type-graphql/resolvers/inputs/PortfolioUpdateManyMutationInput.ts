import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;
}
