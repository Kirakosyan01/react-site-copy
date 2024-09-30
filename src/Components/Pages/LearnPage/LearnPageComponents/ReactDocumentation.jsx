import style from "../LearnPage.module.css";
import LearnPng from "../../../images/Screenshot 2024-09-30 141201.png";
import JsFunctionsPng from "../../../images/Screenshot 2024-09-30 141733.png";
import AppJs from "../../../images/Screenshot 2024-09-30 141956.png";
import AboutPagePng from "../../../images/Screenshot 2024-09-30 142350.png";
import AvatarPng from "../../../images/Screenshot 2024-09-30 142350.png";
import AvatarCssPng from "../../../images/Screenshot 2024-09-30 142654.png";
import DataPng from "../../../images/Screenshot 2024-09-30 142959.png";
import ImgUrl from "../../../images/Screenshot 2024-09-30 143114.png";
import HedyLamarr from "../../../images/Screenshot 2024-09-30 143243.png";
import LoginFormPng from "../../../images/Screenshot 2024-09-30 143559.png";
import AdminPanelPng from "../../../images/Screenshot 2024-09-30 143751.png";
import ProductsPng from "../../../images/Screenshot 2024-09-30 144330.png";
import ListItemPng from "../../../images/Screenshot 2024-09-30 144514.png";
import BtnPng from "../../../images/Screenshot 2024-09-30 144747.png";
import UseStatePng from "../../../images/Screenshot 2024-09-30 144917.png";
import CountPng from "../../../images/Screenshot 2024-09-30 145043.png";
import SeperatelyPng from "../../../images/Screenshot 2024-09-30 145142.png";
import MyAppsPng from "../../../images/Screenshot 2024-09-30 145428.png";
import secondAppPng from "../../../images/Screenshot 2024-09-30 145618.png";
import setCountPng from "../../../images/Screenshot 2024-09-30 145738.png";
import secondSetCountPng from "../../../images/Screenshot 2024-09-30 145854.png";
import FinalyPng from "../../../images/Screenshot 2024-09-30 150031.png";
import TogetherPng from "../../../images/Screenshot 2024-09-30 150201.png";
import { LearnPageFooter } from "./LearnPageFooter.jsx";

export function ReactDocumentation() {
  return (
    <div className={style.react_documentation}>
      <div className={style.learn_text}>
      <div className={style.introduction}>
        <h2>Quick Start</h2>
        <p>
          Welcome to the React documentation! This page will give you an
          introduction to the 80% of React concepts that you will use on a daily
          basis.
        </p>
        <img src={LearnPng} />
      </div>
      <div className={style.madeout}>
        <h3>Creating and nesting components </h3>
        <p>
          React apps are made out of components. A component is a piece of the
          UI (user interface) that has its own logic and appearance. A component
          can be as small as a button, or as large as an entire page.
        </p>
        <p>React components are JavaScript functions that return markup:</p>
        <img src={JsFunctionsPng} />
        <p>
          Notice that MyButton starts with a capital letter. That’s how you know
          it’s a React component. React component names must always start with a
          capital letter, while HTML tags must be lowercase.
        </p>
        <p>Have a look at the result:</p>
        <img src={AppJs} />
        <p>
          The export default keywords specify the main component in the file. If
          you’re not familiar with some piece of JavaScript syntax, MDN and
          javascript.info have great references.
        </p>
      </div>
      <div className={style.markup}>
        <h3>Writing markup with JSX</h3>
        <p>
          The markup syntax you’ve seen above is called JSX. It is optional, but
          most React projects use JSX for its convenience. All of the tools we
          recommend for local development support JSX out of the box.
        </p>
        <p>
          JSX is stricter than HTML. You have to close tags like br. Your
          component also can’t return multiple JSX tags. You have to wrap them
          into a shared parent, like a div...div or an empty ... wrapper:
        </p>
        <img src={AboutPagePng} />
        <p>
          If you have a lot of HTML to port to JSX, you can use an online
          converter.
        </p>
      </div>
      <div className={style.adding_styles}>
        <h3>Adding styles </h3>
        <p>
          In React, you specify a CSS class with className. It works the same
          way as the HTML class attribute:
        </p>
        <img src={AvatarPng} />
        <p>Then you write the CSS rules for it in a separate CSS file:</p>
        <img src={AvatarCssPng} />
        <p>
          React does not prescribe how you add CSS files. In the simplest case,
          you’ll add a link tag to your HTML. If you use a build tool or a
          framework, consult its documentation to learn how to add a CSS file to
          your project.
        </p>
      </div>
      <div className={style.displaying}>
        <h3>Displaying data</h3>
        <p>
          JSX lets you put markup into JavaScript. Curly braces let you “escape
          back” into JavaScript so that you can embed some variable from your
          code and display it to the user. For example, this will display
          user.name:
        </p>
        <img src={DataPng} />
        <p>
          You can also “escape into JavaScript” from JSX attributes, but you
          have to use curly braces instead of quotes. For example,
          className="avatar" passes the "avatar" string as the CSS class, but
          src=user.imageUrl reads the JavaScript user.imageUrl variable value,
          and then passes that value as the src attribute:
        </p>
        <img src={ImgUrl} />
        <p>
          You can put more complex expressions inside the JSX curly braces too,
          for example, string concatenation:
        </p>
        <img src={HedyLamarr} />
        <p>
          In the above example, style= is not a special syntax, but a regular
          object inside the style= JSX curly braces. You can use the style
          attribute when your styles depend on JavaScript variables.
        </p>
      </div>
      <div className={style.conditional}>
        <h3>Conditional rendering</h3>
        <p>
          In React, there is no special syntax for writing conditions. Instead,
          you’ll use the same techniques as you use when writing regular
          JavaScript code. For example, you can use an if statement to
          conditionally include JSX:
        </p>
        <img src={LoginFormPng} />
        <p>
          If you prefer more compact code, you can use the conditional ?
          operator. Unlike if, it works inside JSX:
        </p>
        <img src={AdminPanelPng} />
        <p>
          All of these approaches also work for conditionally specifying
          attributes. If you’re unfamiliar with some of this JavaScript syntax,
          you can start by always using if...else.
        </p>
      </div>
      <div className={style.rendering}>
        <h3>Rendering lists</h3>
        <p>
          You will rely on JavaScript features like for loop and the array map()
          function to render lists of components.
        </p>
        <p>For example, let’s say you have an array of products:</p>
        <img src={ProductsPng} />
        <p>
          Notice how li has a key attribute. For each item in a list, you should
          pass a string or a number that uniquely identifies that item among its
          siblings. Usually, a key should be coming from your data, such as a
          database ID. React uses your keys to know what happened if you later
          insert, delete, or reorder the items.
        </p>
        <img src={ListItemPng} />
      </div>
      <div className={style.responding}>
        <h3>Responding to events</h3>
        <p>
          You can respond to events by declaring event handler functions inside
          your components:
        </p>
        <img src={BtnPng} />
      </div>
      <div className={style.updating}>
        <h3>Updating the screen </h3>
        <p>
          Often, you’ll want your component to “remember” some information and
          display it. For example, maybe you want to count the number of times a
          button is clicked. To do this, add state to your component.
        </p>
        <img src={UseStatePng} />
        <img src={CountPng} />
        <img src={SeperatelyPng} />
      </div>
      <div className={style.using_hooks}>
        <h3>Using Hooks</h3>
        <p>
          Functions starting with use are called Hooks. useState is a built-in
          Hook provided by React. You can find other built-in Hooks in the API
          reference. You can also write your own Hooks by combining the existing
          ones.
        </p>
        <p>
          Hooks are more restrictive than other functions. You can only call
          Hooks at the top of your components (or other Hooks). If you want to
          use useState in a condition or a loop, extract a new component and put
          it there.
        </p>
      </div>
      <div className={style.sharing}>
        <h3>Sharing data between components</h3>
        <p>
          In the previous example, each MyButton had its own independent count,
          and when each button was clicked, only the count for the button
          clicked changed:
        </p>
        <img src={MyAppsPng} />
        <p>
          However, often you’ll need components to share data and always update
          together.
        </p>
        <p>
          To make both MyButton components display the same count and update
          together, you need to move the state from the individual buttons
          “upwards” to the closest component containing all of them.
        </p>
        <p>In this example, it is MyApp:</p>
        <img src={secondAppPng} />
        <p>
          Now when you click either button, the count in MyApp will change,
          which will change both of the counts in MyButton. Here’s how you can
          express this in code.
        </p>
        <p>First, move the state up from MyButton into MyApp:</p>
        <img src={setCountPng} />
        <img src={secondSetCountPng} />
        <p>
          The information you pass down like this is called props. Now the MyApp
          component contains the count state and the handleClick event handler,
          and passes both of them down as props to each of the buttons.
        </p>
        <p>
          Finally, change MyButton to read the props you have passed from its
          parent component:
        </p>
        <img src={FinalyPng} />
        <img src={TogetherPng} />
        <h3>Next Steps</h3>
        <p>By now, you know the basics of how to write React code!</p>
        <p>
          Check out the Tutorial to put them into practice and build your first
          mini-app with React.
        </p>
      </div>
      </div>
      <LearnPageFooter />
    </div>
  );
}
