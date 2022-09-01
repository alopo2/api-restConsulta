Link da API pública no Heroku: <br>
https://api-consulta-processual.herokuapp.com/processos
<br>
🛠 Tecnologias Utilizadas: <br>
<ul>
<li>Node JS</li>
<li>Express JS</li>
<li>Node Fetch</li>
<li>Heroku</li>
</ul>
No ínicio da solução mapeei as possibilidades de impletação. Pensei em criar apenas um .json e integrá-lo com o front-end feito em React. Porém, resolvi que seria muito mais interessante, se criasse uma API REST e fizesse o deploy dela, para consumir utilizando o link criado no heroku.

Tendo definido que o armazenamento dos dados seriam por json, passei a criação desse json populando-o. 
<div style="display: inline_block"><br>
<img align="center" alt="Json Files" width="600px" src="https://user-images.githubusercontent.com/105977369/187979241-06885388-f260-473a-9360-eb1bfa176c1e.png">
</div>
Seguindo em testar se este arquivo de dados em json estava ou não funcionando, utilizei o readFile, para acessar os dados desse json por meio do console. 

<div style="display: inline_block"><br>
<img align="center" alt="Teste 01" width="600px" src="https://user-images.githubusercontent.com/105977369/187473298-cfb99e24-76ca-4e97-83da-f8d7dba0061d.png">
</div>

O primeiro problema encontrado, e o que demorou para ser resolvido foi: tendo definido esse json, populado e estando funcional, precisaríamos importá-lo para dentro da nosso index.js que seria o arquivo principal da nossa API. 

O problema foi que quando tentava importar esse json, aparecia um erro no console, informando que o formato não era suportado, daí foi preciso ler a documentação para tentar resolver o problema. 

Pensei que a solução seria apenas exportar esse json, e importar no index.js, porém continuava sem funcionar. 

Utilizei o readFile para ler o json e tentei exportá-lo como variável, e ainda assim, o problema persistia. 

Depois de muitas horas lendo documentação, fóruns na internet e tendo deixado de lado essa solução. Resolvi que seria mais funcional utilizar o FASTAPI do python para criar essa API e poder testá-la. 

Comecei a criar, porém o problema encontrado no desenvolvimento em node.js me perseguiu. E, resolvi que iria ler mais um pouco e tentar resolver. E, foi aí que descobri que para importar um json, nas versões mais novas do node.js (17 em diante), poderíamos passar a informação assert {type: "json"}, depois de chamar o arquivo, e foi o que eu fiz e funcionou perfeitamente.

<div style="display: inline_block"><br>
<img align="center" alt="Resolucao do problema de importacao" width="600px" src="https://user-images.githubusercontent.com/105977369/187475492-f3d9b50e-6b69-458d-b5a6-4dc7b89d671a.jpeg">
</div>
Realizei o deploy da API no servidor do Heroku. Foi necessário retornar ao projeto e adicionar "start": "node index.js" para que o deploy funcionasse corretamente. Realizei a correção e subi a alteração para o github e depois refiz o deploy no Heroku.

<div style="display: inline_block"><br>
<img align="center" alt="Resolucao do problema de importacao" width="600px" src="https://user-images.githubusercontent.com/105977369/187476259-81988169-d064-4012-b574-fffe4ec1616b.png">
</div>

Realizei o teste para verificar se o retorno da API era como esperado. Para realizar o teste do consumo da API, foi necessário adicionar o módulo "node-fetch" na pasta e depois importar para o index.js, conseguindo assim, acessar as informações da API utilizando o fetch.

<div style="display: inline_block"><br>
<img align="center" alt="Consumindo a API do Deploy" width="600px" src="https://user-images.githubusercontent.com/105977369/187476604-a26999c0-869a-4736-9a94-a7b6b46b5e4b.png">
</div>

Precisei retonar no projeto para adicionar o CORS, possibilitando que essa API pudesse ser consumida no Front.
<div style="display: inline_block"><br>
<img align="center" alt="Adicionando o CORS" width="600px" src="https://user-images.githubusercontent.com/105977369/187979800-9ffa9ec7-abbb-47ee-96de-383dac3fa6b5.png">
</div>

Comentários sobre como faria se tivesse mais tempo para executar o projeto: 

<ul>
<li>Refatoração</li>
<li>Criação de Rotas</li>
<li>CRUD</li>
<li>Utilizar a arquitetura MVC, deixando o código mais organizado.</li>
</ul>
