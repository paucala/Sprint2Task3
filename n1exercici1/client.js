
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'nom',          'adreça',          'telefon',          'mail',          'data_registre'],properties: {nom: {bsonType: 'string'},adreça: {bsonType: 'string'},telefon: {bsonType: 'int'},mail: {bsonType: 'string'},data_registre: {bsonType: 'timestamp'},comanda: {bsonType: 'array',items: {
title:'object',properties: {preu_total: {bsonType: 'double'},empleat: {bsonType: 'string'},ulleres_id: {bsonType: 'array',items: {bsonType: 'objectId'}}}}}}         }      },
autoIndexId:true
});  