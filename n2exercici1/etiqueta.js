
db.createCollection( 'etiqueta', {validator: {$jsonSchema: {bsonType: 'object',title:'etiqueta',required: [         'nom'],properties: {nom: {bsonType: 'string'}}         }      }});  