
db.createCollection( 'proveidor', {validator: {$jsonSchema: {bsonType: 'object',title:'proveidor',required: [         'nom',          'adreça',          'telefon',          'fax',          'nif',          'marques'],properties: {nom: {bsonType: 'string'},adreça: {bsonType: 'string'},telefon: {bsonType: 'string'},fax: {bsonType: 'int'},nif: {bsonType: 'string'},marques: {bsonType: 'array',unique : true,items: {
title:'object',required: [         'ulleres'],properties: {ulleres: {bsonType: 'array',items: {
title:'object',required: [         'id',          'graduacio',          'tipus_montura',          'color_montura',          'color_vidre',          'preu'],properties: {id: {bsonType: 'objectId'},graduacio: {bsonType: 'double'},tipus_montura: {enum: },color_montura: {bsonType: 'string'},color_vidre: {bsonType: 'string'},preu: {bsonType: 'double'}}}}}}}}         }      },
autoIndexId:true
});  
 db.proveidor.createIndex(
{
"_marques._nom": 1
},
 {
name: "proveidor_ix_1",
unique: true
}
)

