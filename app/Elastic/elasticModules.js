import { client } from "../Elastic/elasticClient";

import { NextResponse } from "next/server";

export const searchElasticDate = async (text) => {
  const response = await client.search({
    index: "hosaro-vault",
    body: {
      query: {
        match: {
          date: text,
        },
      },
    },
  });

  return response;
};

export const createElasticDocument = async () => {
  const { response } = await client.create({
    index: "titles-from-node",
    id: 11,
    body: {
      title: "My First title",
      author: "Steevy",
      date: new Date(),
    },
  });
};

export const updateElasticDocument = async (json) => {
  const { response } = await client.update({
    index: "hosaro-vault",
    id: "MwFPyogBJdWHTRj18nga",
    body: {
      doc: json,
    },
  });
  return response;
};

export const createBulkElasticDocuments = async () => {
  const { response } = await client.bulk({ body: body, refresh: true });

  if (response) {
    console.log(response.errors);
  }
};

export const searchElastic = async (searchText) => {
  const mySearch = await client.search({
    index: process.env.ELASTIC_INDEX,
    body: {
      query: {
        match: {
          title: searchText,
        },
      },
    },
  });
};
