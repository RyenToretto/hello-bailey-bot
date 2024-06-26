# hello-bailey-bot

- telegram 电报机器人

### 模板日志

```sh
npm init -y

# tsx 用于执行ts [相较于ts-node, 支持 ESModule]
# nodemon 热更新 [开发时使用 nodemon] [线上部署使用 pm2]
npm i -D typescript
npm i -D tsx nodemon enquirer npm-run-all rimraf

npm i -S lodash lodash-es
npm i -D @types/lodash @types/lodash-es

npm i -S grammy @grammyjs/i18n @grammyjs/menu @grammyjs/runner grammy-middlewares
npm i -D @grammyjs/types @types/node

npm i -D eslint@^8.56.0 prettier
npm i -D @typescript-eslint/parser@^7.14.1 @typescript-eslint/eslint-plugin@^7.14.1
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-define-config eslint-plugin-import

npm i -D husky lint-staged
npm i -D commitlint @commitlint/cli @commitlint/config-conventional @commitlint/config-angular
npx husky install
npx husky add .husky/pre-commit 'npx lint-staged'
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

npm i -S dotenv
```

### IDE 配置

- VSCode https://code.visualstudio.com/
