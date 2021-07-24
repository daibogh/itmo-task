## Available Scripts(и кастомные скрипты в конце)

есть проблема с CORS, на локальной сборке будет работать проксирование, 
на проде надо починить со стороны бэка или запускать фронт на том же домене 

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Кастомные скрипты

### `yarn lint`

Запускает линтер

### `yarn lint:fix`

Запускает линтер с автоматическим исправлением

### `yarn styleguide`
Запуск библиотеки компонентов (использовалась при разработке некоторых ui элементов)
### `yarn icon`
Генерирует интерфейс для имен иконок
Все svg кладутся в src/svg директорию, потом запускается `yarn icon`, добавляем импорт в Icon.tsx
после можно вызвать с помощью <Icon name="name-of-your-svg" />

TODO: Порефакторить компонент: заменить img на svg 
(убрать импорты, интегрировать svg-sprite-loader - это позволит менять цвет иконок)

