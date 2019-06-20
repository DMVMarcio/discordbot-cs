# Discord Bot - Commands Structure

###### 📡 Simples bot para discord feito em `javascript` por @DMVMarcio na framework [DiscordCS](https://www.npmjs.com/package/discordcs).

# Como criar um bot?

###### 🔨 Você deverá acessar o [discord developers](https://discordapp.com/developers/applications/me), logar em sua conta e criar uma nova aplicação clicando em `Create an aplication` e em seguida colocar um nome e foto para seu bot. <h6> Após isso deverá ir na aba `bot` ao lado e clicar em `Add Bot`.

Você pode alterar as opções do bot acessando o arquivo: `config.json`

PARÂMETRO | RESULTADO
------------ | -------------
TOKEN | Token de seu bot
PREFIX | Prefixo desejado para o bot

# Como adquiro o token de meu bot?

Você deverá ir na aba **bot** ao lado e clicar em `Click to Reveal Token` ao lado da foto.<h6>⚠**AVISO:** Não divulgue seu **token** à nenhuma pessoa, ele é usado para o **login** na conta do bot, ou seja, poderão fazer **tudo** que quiserem no bot, caso isso ocorra você pode **trocar** o token clicando no botão `Regenerate` abaixo do token.

# Como iniciar o bot?

Primeiramente, você precisará **baixar** o __[node.js](https://nodejs.org/)__ `versão recomendada`, após instalado, reinicie seu computador e depois execute o arquivo `terminal.bat`, abrindo-o você deverá digitar `npm init`, e em seguida digitar `npm install discordcs`. Após isso, finalmente inicie seu bot digitando `node index.js` ou `node .`

<p align="center">
  <img src="https://i.imgur.com/ns4UXTv.png"/>
</p>

# Como adiciono meu bot ao servidor?

💬 Você pode adquirir o convite acessando **[Discord Permissions Calculator](https://discordapi.com/permissions.html#2146958591)**, configure as permissões desejadas, coloque o `client id` de seu bot abaixo e acesse o link dado pelo site.

# Como troco o jogando do bot?

Acesse o arquivo `index.js` e procure por **client.user.setPresence({ game: { name: 'DiscordCS', type: 0 } })**, basta alterar a mensagem escrita entre `"`.

# Como criar novos comandos?

👾 Você apenas precisa criar um arquivo na pasta **comandos**: `NomeDoComando.js`, dentro deste arquivo você colocará o código do comando,  para editar o arquivo, recomendo usar [Visual Studio Code](https://code.visualstudio.com/), existem alguns comandos de **exemplo** na pasta. Se você tiver dúvidas poderá **consultar** algumas **comunidades** de programação no discord: **[LabNegro](https://discord.gg/XzHdjaD)** etc...