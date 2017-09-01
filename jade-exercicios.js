

01)
>db.filmes.find({generos:{$in:["Action"]},data_estreia:{$gte:new Date(200,1,1),$lte:new Date(2003,12,31)}},{_id:0,titulo:1,generos:1,data_estreia:1}).pretty()

02)
>db.filmes.find({$or:[{generos:{$in:["Horror"]}},{generos:{$in:["Comedy"]}}],duracao:{$lt:120}},{_id:0,titulo:1,generos:1,duracao:1}).pretty()

03)
>db.filmes.find({atores:{$in:["Bruce Willis"]}},{_id:0,titulo:1,atores:1})

04)
> db.filmes.find({},{_id:0,titulo:1,diretores:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(10).pretty()

05)
> db.filmes.find({},{_id:0,titulo:1,diretores:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(10).pretty()

06)
> db.filmes.find({diretores:{$in:["Steven Spierlberg"]},data_estreia:{$gte:new Date(1990,1,1),$lte: new Date(1999,12,31)}},{_id:0,titulo:1,diretores:1,data_estreia:1}).pretty()

07)
>db.filmes.find({duracao:{$gt:180}},{_id:0,titulo:1,duracao:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(1).pretty()


08)
>db.filmes.count({data_estreia:{$gte:new Date(2005,1,1), $lte:new Date(2005,12,31)}})

09)
>db.filmes.distinct("atores", {generos:{$in:["Action"], $in:["Comedy"]}, data_estreia:{$gte:new Date(2010,1,1), $lte:new Date(2010,12,31) }} )


10)
>db.filmes.find({atores:{$in:["Brad Pitt"]},}, {_id:0, atores:1, arrecadacao:1}).sort({arrecadacao:-1}).limit(1).pretty()






