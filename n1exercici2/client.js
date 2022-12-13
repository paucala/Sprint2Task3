
db.createCollection( 'client', {validator: {$jsonSchema: {bsonType: 'object',title:'client',required: [         'nom',          'cognoms',          'adreça',          'telefon',          'comandes'],properties: {nom: {bsonType: 'string'},cognoms: {bsonType: 'string'},adreça: {bsonType: 'object',
title:'object',required: [         'carrer',          'numero',          'CP',          'provincia'],properties: {carrer: {bsonType: 'string'},numero: {bsonType: 'string'},CP: {bsonType: 'int'},provincia: {bsonType: 'objectId'}}},telefon: {bsonType: 'string'},comandes: {bsonType: 'array',items: {
title:'object',required: [         'botiga',          'data',          'tipus',          'quantitat_productes',          'preu_total'],properties: {botiga: {bsonType: 'objectId'},data: {bsonType: 'timestamp'},tipus: {bsonType: 'object',
title:'object',required: [         'tipus'],properties: {tipus: {enum: },domicili: {bsonType: 'object',
title:'object',required: [         'id_empleat',          'hora_entrega'],properties: {id_empleat: {bsonType: 'objectId'},hora_entrega: {bsonType: 'timestamp'}}}}},quantitat_productes: {bsonType: 'int'},preu_total: {bsonType: 'double'},hamburgueses: {bsonType: 'array',items: {
title:'object',required: [         'nom',          'descripcio',          'imagte',          'preu'],properties: {nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},imagte: {bsonType: 'string'},preu: {bsonType: 'double'}}}},begudes: {bsonType: 'array',items: {
title:'object',required: [         'nom',          'descripcio',          'imatge',          'preu'],properties: {nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},imatge: {bsonType: 'string'},preu: {bsonType: 'double'}}}},pizzes: {bsonType: 'array',items: {
title:'object',properties: {categoria: {bsonType: 'array',items: {
title:'object',required: [         'nom',          'pizzes'],properties: {nom: {bsonType: 'string'},pizzes: {bsonType: 'array',items: {
title:'object',required: [         'nom',          'descripcio',          'imatge',          'preu'],properties: {nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},imatge: {bsonType: 'string'},preu: {bsonType: 'double'}}}}}}}}}}}}}}         }      }});  