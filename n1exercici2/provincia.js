
db.createCollection( 'provincia', {validator: {$jsonSchema: {bsonType: 'object',title:'provincia',required: [         'nom',          'localitat'],properties: {nom: {bsonType: 'string'},localitat: {bsonType: 'array',items: {
title:'object',required: [         'id',          'nom'],properties: {id: {bsonType: 'objectId'},nom: {bsonType: 'string'}}}}}         }      }});  