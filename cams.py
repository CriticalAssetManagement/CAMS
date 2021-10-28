#!/usr/bin/python3
from terminusdb_client import WOQLClient
import re
import csv
import json
import math
import os
import urllib.parse

def import_cams(client):
    schema = open('cams.json',)
    schema_objects = json.load(schema)

    results = client.insert_document(schema_objects,
                                     graph_type="schema")
    print(f"results: {results}")

if __name__ == "__main__":

    team = os.environ['TERMINUSDB_TEAM']
    team_quoted = urllib.parse.quote(team)
    client = WOQLClient(f"https://cloud.terminusdb.com/{team_quoted}/")
    # make sure you have put the token in environment variable
    # https://docs.terminusdb.com/v10.0/#/terminusx/get-your-api-key
    client.connect(team=team, use_token=True)

    dbid = "CAMS"
    label = "CAMS"
    description = "Critical Asset Management System Data Product"
    prefixes = {'@base' : 'iri://CAMS/',
                '@schema' : 'iri://CAMS#'}

    if client.get_database(dbid):
        client.delete_database(dbid, team=team, force=True)

    client.create_database(dbid,
                           team,
                           label=label,
                           description=description,
                           prefixes=prefixes)

    import_cams(client)
