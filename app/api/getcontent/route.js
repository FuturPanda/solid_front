import { NextResponse } from "next/server";
import { client } from "../../Elastic/elasticClient";

export const GET = async () => {
  const response = await client.search({
    index: "hosaro-vault",
    body: {
      query: {
        match: {
          date: 1706,
        },
      },
    },
  });

  return NextResponse.json(response);
};
