// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),

  bg: {
    kea1: require("../assets/bg/kea1.jpg"),
    kea2: require("../assets/bg/kea2.jpg"),
    kea3: require("../assets/bg/kea3.jpg")
  },

  act1: {
    moore: require("../assets/act1/moore.jpg"),
    javaConcat: require("../assets/act1/java-concat.png")
  },
  act2: {
    chromeOld: require("../assets/act2/chrome-old.png"),
    chromeMid: require("../assets/act2/chrome-mid.png"),
    evergreen: require("../assets/act2/evergreen.jpg"),
    ecmascriptHistory: require("../assets/act2/ecmascript-history.png"),
    babel: require("../assets/act2/babel.png"),
    chrome: require("../assets/act2/chrome.png"),
    es6Compat: require("../assets/act2/es6-compat.png")
  },
  act3: {
    webpack: require("../assets/act3/webpack.png"),
    react: require("../assets/act3/react.png"),
    reactBg: require("../assets/act3/react-bg.png"),
    tree: require("../assets/act3/tree.jpg"),
    todomvc: require("../assets/act3/todomvc.png"),
    vikings: require("../assets/act3/vikings.jpg")
  },
  act4: {
    example: require("../assets/act4/example.jpg"),
  }
};

preloader(images);

const theme = createTheme({
  primary: "#4A8DF3"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} progress="bar" transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              Vikings, mountain parrots
            </Heading>
            <Heading size={1} fit caps>
              and domain driven simplicity
            </Heading>
            <Heading size={1} fit caps textColor="black" lineHeight={2}>
              a short intro to
              full stack programming in 2016
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Link href="https://twitter.com/mariusandra" lineHeight={2}>
              <Text bold textColor="white">@mariusandra</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.bg.kea1.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white">
              Wait What ???
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                1. the history of simplicity
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="white">
                2. modern ECMAScript (JavaScript)
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                3. vikings and mountain parrots
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Act I
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              The history of simplicity
            </Heading>
            <Appear>
              <Text textColor="white">
                Warning: contains Java
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="white">
            <Heading size={1} fit caps textColor="black" textFont="primary">
              Simplicity???
            </Heading>
            <Appear>
              <BlockQuote>
                <Quote fit>a thing that is plain or uncomplicated.</Quote>
              </BlockQuote>
            </Appear>
            <Appear>
              <Heading size={1} fit caps textColor="black" textFont="primary">
                "7 ± 2"
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act1/booking-or-lesson.rb.example")}
            ranges={[
              { loc: [0, 270], title: "An example" },
              { loc: [0, 6], title: "a booking model" },
              { loc: [8, 13], title: "a lesson model" },
              { loc: [2, 3], note: "state..." },
              { loc: [9, 10], note: "... or status?" },
              { loc: [16, 23], title: "Bug bug bug!" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="c"
            code={require("raw!../assets/act1/concat-in-c.example")}
            ranges={[
              { loc: [0, 270], title: "Time to join some strings!" },
              { loc: [3, 4], note: "a function to concat strings" },
              { loc: [5, 9], note: "allocate memory" },
              { loc: [8, 9], title: "don\'t forget the \\0" },
              { loc: [10, 12], note: "you might not have enough memory available..." },
              { loc: [12, 15], note: "copy the char arrays" },
              { loc: [14, 15], title: "keep remembering the \\0" },
              { loc: [16, 17], note: "and that\'s it" },
              { loc: [16, 17], title: "free the memory later, kthxbye" }
            ]}
          />

          <Slide transition={["fade"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              That is not simple!
            </Heading>
            <Appear fid="2">
              <List textColor="white">
                <ListItem>Remember to null-terminate</ListItem>
                <ListItem>Remember to allocate memory</ListItem>
                <ListItem>Remember to free memory later</ListItem>
                <ListItem>...</ListItem>
                <ListItem>...</ListItem>
                <ListItem>...</ListItem>
                <ListItem>...</ListItem>
              </List>
            </Appear>
            <Appear fid="3">
              <Text textColor="primary" fit>
                You only have four slots of brainpower left
                <br />
                to reason about your application!
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act1/concat-in-java.example")}
            ranges={[
              { loc: [0, 270], title: "Java?" },
              { loc: [0, 3], note: "+" },
              { loc: [5, 11], note: "StringBuilder?" },
              { loc: [13, 19], note: "StringBuffer?" }
            ]}
          />

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act1.javaConcat.replace("/", "")} width={"100%"} />
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act1.moore.replace("/", "")} width={"100%"} />
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act1/concat-in-rb.example")}
            ranges={[
              { loc: [0, 270], title: "Ruby!!" },
            ]}
          />

          <Slide transition={["slide"]} bgImage={images.bg.kea2.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white">
              Webapps!
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Morphing data.
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="php"
            code={require("raw!../assets/act1/map-in-php.example")}
            ranges={[
              { loc: [0, 270], title: "Map in php" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act1/map-in-ruby.example")}
            ranges={[
              { loc: [0, 270], title: "Map in ruby" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="white">
              Ruby is not perfect!
            </Heading>
            <Appear fid="1">
              <List textColor="white">
                <ListItem>it's slow</ListItem>
                <ListItem>not concurrent</ListItem>
                <ListItem>...</ListItem>
              </List>
            </Appear>
            <Appear fid="1">
              <Text bold>
                ... but its simplicity makes up for it 99% of the time!
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Act II
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              Modern ECMAScript (JavaScript)
            </Heading>
            <Appear>
              <Text textColor="white">
                Warning: contains graphs
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit>Webapps</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Backend
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Frontend
                </Heading>
              </Fill>
            </Layout>
            <Layout>
              <Fill>
                <Appear>
                  <Heading size={4} textColor="white" bgColor="black" margin={10}>
                    Amazing innovation
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Heading size={4} textColor="white" bgColor="black" margin={10}>
                    WTF has been happening here?
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act2.chrome.replace("/", "")} width={"50%"} />
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act2.chromeOld.replace("/", "")} width={"100%"} />
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act2.chromeMid.replace("/", "")} width={"100%"} />
          </Slide>

          <Slide transition={["slide"]} bgColor="white" bgImage={images.act2.evergreen.replace("/", "")} note="https://www.flickr.com/photos/31417716@N00/3111047547">
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act2.ecmascriptHistory.replace("/", "")} width={"100%"} />
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act2.es6Compat.replace("/", "")} width={"100%"} />
          </Slide>
          
          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act2.babel.replace("/", "")} width={"100%"} />
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act1/map-in-ruby.example")}
            ranges={[
              { loc: [0, 270], title: "Map in ruby" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act2/map-in-es6.example")}
            ranges={[
              { loc: [0, 270], title: "Map in ECMAScript" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act2/concat-in-es6.example")}
            ranges={[
              { loc: [0, 270], title: "Concat in ES6" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act2/destructuring.example")}
            ranges={[
              { loc: [0, 270], title: "Destructuring" },
              { loc: [0, 1], note: "You take an object" },
              { loc: [2, 9], note: "... and break it apart it" },
              { loc: [10, 15], title: "Or do this:" },
              { loc: [10, 19], title: "... it prints what you expect" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act2/import-export.example")}
            ranges={[
              { loc: [0, 270], title: "Modules" },
              { loc: [0, 7], note: "export 2 functions in lib.js" },
              { loc: [8, 14], note: "use them in main.js" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="white">
              Did you notice something funny? ;)
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear>
              <Heading textColor="black" fit caps>
                Yes, no semicolons!
              </Heading>
            </Appear>
            <Appear>
              <Text textColor="black">
                <small>The last ones you'll see for a while: ;;;;</small>
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Act III
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              Modern frontend programming
            </Heading>
            <Appear>
              <Text textColor="white">
                Warning: contains vikings
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act3.webpack.replace("/", "")} width={"100%"} />
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act2/import-export.example")}
            ranges={[
              { loc: [8, 14], title: "Remember this?" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-json-loader.example")}
            ranges={[
              { loc: [0, 270], title: "Supercharged!" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-raw-loader.example")}
            ranges={[
              { loc: [0, 270], title: "Random text file" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-raw-loader-source.example")}
            ranges={[
              { loc: [0, 270], title: "raw-loader" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-rb-loader.example")}
            ranges={[
              { loc: [0, 270], title: "raw-loader", note: "Parse all ruby methods from a file" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-rb-loader-source.example")}
            ranges={[
              { loc: [0, 270], title: "./ruby-method-loader.js" },
              { loc: [5, 12], note: "just some dumb string parsing" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps textColor="white">
              Load a css file, inline all images less than 8kb, and add it to the global .css file?
            </Heading>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-css-loader.example")}
            ranges={[
              { loc: [0, 270], title: "here you go" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/webpack-css-loader-conf.example")}
            ranges={[
              { loc: [0, 270], title: "Some config required" },
              { loc: [2, 6], note: ".css files" },
              { loc: [7, 11], note: ".scss files" },
              { loc: [12, 18], note: "images" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act3.react.replace("/", "")} width={"60%"} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps textColor="white">
              Oh no, it merges HTML and JS, it's the end of all civilisation!
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps textColor="white">
              No.
            </Heading>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/react-inline.example")}
            ranges={[
              { loc: [0, 270], title: "minimal react (jsx)" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/react-inline-compiled.example")}
            ranges={[
              { loc: [0, 270], title: "compiled via babel" },
            ]}
          />

          <Slide transition={["slide"]} bgImage={images.act3.reactBg.replace("/", "")} bgDarken={0.85}>
            <Heading size={1} caps fit textColor="white">
              What does react provide?
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                1. removes overhead (the 7 ± 2 rule)
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="white">
                2. beautiful integration with ES6 modules
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                3. makes html a programming language
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="white">
                4. server side (isomorphic) rendering
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps fit textColor="primary">
              Redux
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.act3.tree.replace("/", "")} note="https://www.flickr.com/photos/29233640@N07/14724197800">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.act3.tree.replace("/", "")} bgDarken="0.75">
            <BlockQuote>
              <Quote fit>I like the simplicity of the [redux] abstraction itself because it’s very straight-forward to debug.</Quote>
              <Cite textColor="white">James Long (<Link textColor="white" href='https://twitter.com/jlongster'>@jlongster</Link>)</Cite>
            </BlockQuote>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-store.example")}
            ranges={[
              { loc: [0, 270], title: "Redux example" },
              { loc: [0, 1], note: "Import a helper" },
              { loc: [2, 11], note: "The reducer" },
              { loc: [12, 15], note: "Create the store" },
              { loc: [16, 24], note: "dispatch actions to update the store" },
            ]}
          />

          <Slide transition={["slide"]} bgColor="#f5f5f5">
            <Image src={images.act3.todomvc.replace("/", "")} width={"100%"} />
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/todomvc-tree.example")}
            ranges={[
              { loc: [0, 270], title: "Sample tree" },
              { loc: [1, 2], note: "visibilityFilter" },
              { loc: [2, 14], note: "the todos" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/todomvc-actions.example")}
            ranges={[
              { loc: [0, 270], title: "The actions" },
              { loc: [0, 4], note: "update visibility filter" },
              { loc: [5, 9], note: "add todo" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/todomvc-action-creators.example")}
            ranges={[
              { loc: [0, 270], title: "Action creators" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/todomvc-reducer.example")}
            ranges={[
              { loc: [0, 270], title: "The reducer" },
              { loc: [0, 1], note: "still just a function" },
              { loc: [1, 9], note: "changing the visibility filter" },
              { loc: [10, 21], note: "add a todo" },
              { loc: [22, 23], note: "no action matched? just return the state" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/todomvc-logic.example")}
            ranges={[
              { loc: [0, 270], title: "redux-act" },
              { loc: [0, 6], note: "constants" },
              { loc: [7, 18], note: "changing the visibility filter" },
              { loc: [19, 21], note: "combined reducer" },
              { loc: [21, 29], note: "for visibilityFilter" },
              { loc: [30, 43], note: "for todos" },
              { loc: [31, 38], note: "addTodo" },
              { loc: [38, 42], note: "clearCompleted" }
            ]}
          />


          <Slide transition={["slide"]} bgImage={images.bg.kea1.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white">
              Let's start building!!!
            </Heading>
            <Appear>
              <Heading size={1} caps fit textColor="primary">
                NOPE
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Some things are still missing
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.bg.kea3.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="primary">
                Side effects
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Code structure
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} caps fit textColor="primary">
                Storing UI state
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                Filtering data
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} caps fit textColor="primary">
                Rails integration
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.act3.vikings.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.act3.vikings.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="white">
              redux-saga
            </Heading>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-before.example")}
            ranges={[
              { loc: [0, 270], title: "The old way" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-after.example")}
            ranges={[
              { loc: [0, 270], title: "In a saga" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-comments.example")}
            ranges={[
              { loc: [0, 270], title: "Also get comments" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-comments-parallel.example")}
            ranges={[
              { loc: [0, 270], title: "... in parallel" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-repeat.example")}
            ranges={[
              { loc: [0, 270], title: "Every 10 seconds?" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-repeat-with-timeout.example")}
            ranges={[
              { loc: [0, 270], title: "... with a 5 sec timeout?" },
              { loc: [2, 6], note: "set up a race" },
              { loc: [7, 16], note: "who won?" },
              { loc: [17, 18], note: "and repeat..." }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act3/redux-saga-fork.example")}
            ranges={[
              { loc: [0, 270], title: "Run until cancelled" },
              { loc: [0, 8], note: "The saga" },
              { loc: [1, 2], note: "a redux event with type === 'START_SYNC'" },
              { loc: [2, 3], note: "start bgSync in the background" },
              { loc: [4, 5], note: "block until an event with type === 'STOP_SYNC'" },
              { loc: [5, 6], note: "cancel the worker" },
              { loc: [1, 2], note: "and wait for a 'START_SYNC' again" },
              { loc: [9, 24], title: "bgsync()" },
              { loc: [11, 17], note: "does its thing" },
              { loc: [17, 24], note: "until cancelled" }
            ]}
          />

          <Slide transition={["slide"]} bgColor="black">
            <Heading caps textColor="white">
              Code structure?
            </Heading>
            <Appear>
              <Heading size={12} caps textColor="white">
                redux-webpack-es6-boilerplate, react-production-starter, mern.io, react-redux-starter, react-slingshot,
                react-redux-boilerplate, react-boilerplate, react-redux-scaffold, simple-redux-boilerplate, reactv,
                redux-boilerplate, react-redux-starter-kit, simplest-redux-example, redux-easy-boilerplate, dicty-redux,
                3ree, react_scaffolding, express-redux-sample, redux-blog-example, redux-undo-boilerplate, redux500,
                redux-demo, react-redux-universal-hot-example, rde, React Redux Starter Kit, skeleton, browser-redux,
                react-for-hipsters-boilerplate, Documented Koa Redux React Webpack boilerplate, err, friends-app-redux,
                isomorphic-redux-app, starter-kit, loopback-redux-react-boilerplate, breko-hub,
                React Redux Cordova Boilerplate, react-boilerplate, react-webpack-node, Hapi React Starter Kit,
                Universal Redux Template, universal-js, redux-react-material-boilerplate, react-redux-starter,
                Reduxible, react-workflow, ReacToGo, React/Redux simple CRUD, StarHackIt, React Seed, React/Redux with Auth boilerplate
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act4/redux-sound-1.example")}
            ranges={[
              { loc: [0, 270], title: "sound-redux" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act4/redux-sound-2.example")}
            ranges={[
              { loc: [0, 270], title: "playlist?" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act4/redux-sound-3.example")}
            ranges={[
              { loc: [0, 270], title: "song?" },
              { loc: [1, 2], title: "1" },
              { loc: [3, 4], title: "2" },
              { loc: [4, 5], title: "3" },
              { loc: [6, 7], title: "4" },
              { loc: [8, 9], title: "5" },
              { loc: [10, 11], title: "6" },
              { loc: [0, 270], title: "6 files 5 folders.com" }
            ]}
          />

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Act IV
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              Mountain parrots
            </Heading>
            <Appear>
              <Text textColor="white">
                Warning: contains parrots
              </Text>
            </Appear>
          </Slide>

          <Slide bgColor="black" height="100%">
            <Layout height="100%">
              <Fill height="100%">
                <iframe width="100%" height="100%" style={{minHeight: '500px'}} src="https://www.youtube.com/embed/oAhzmULgoqI?start=480" frameBorder="0" allowFullScreen></iframe>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.bg.kea1.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.bg.kea1.replace("/", "")} bgDarken={0.5}>
            <Heading lineHeight={1} size={1}>
              KEA
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear>
              <BlockQuote>
                <Quote textColor='white' fit>What's the smartest way to develop web applications using React?</Quote>
              </BlockQuote>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading lineHeight={1} size={1}>
              kea-cli
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Code size={12} textColor="white">
              npm install -g kea
            </Code>
            <br />
            <br />
            <Code size={12} textColor="white">
              kea new myappname
            </Code>
            <br />
            <br />
            <Code size={12} textColor="white">
              cd myappname
            </Code>
            <br />
            <Code size={12} textColor="white">
              npm install
            </Code>
            <br />
            <Code size={12} textColor="white">
              npm start
            </Code>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading lineHeight={1} size={1}>
              kea-logic
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Code size={12} textColor="white">
              createLogic,
              pathSelector,
              createSelectors,
              createCombinedReducer,
              selectPropsFromLogic,
              createCombinedSaga,
              createScene,
              getRoutes,
              combineScenesAndRoutes
            </Code>
          </Slide>

          <Slide transition={["fade"]} bgColor="black">
            <Heading lineHeight={1} size={1}>
              code structure
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Code size={12} textColor="white">
              components/
            </Code>
            <br />
            <br />
            <Code size={12} textColor="white">
              scenes/
            </Code>
            <br />
            <br />
            <Code size={12} textColor="white">
              utils/
            </Code>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.act4.example.replace("/", "")} width={"80%"} />
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="bash"
            code={require("raw!../assets/act4/kea-structure.example")}
            ranges={[
              { loc: [0, 270], title: "kea code structure" },
              { loc: [0, 6], note: "the homepage scene" },
              { loc: [7, 13], note: "a slider on the homepage" },
              { loc: [14, 20], note: "todomvc" },
              { loc: [21, 23], note: "one todo" },
              { loc: [24, 28], note: "a common header component" },
              { loc: [29, 33], note: "some utils" },
              { loc: [34, 37], note: "the layout" },
              { loc: [38, 43], note: "entrypoint, store and routes" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act4/kea-logic.example")}
            ranges={[
              { loc: [0, 270], title: "homepage logic.js" },
              { loc: [0, 6], note: "required imports" },
              { loc: [7, 10], note: "where are we in the tree?" },
              { loc: [11, 18], note: "just one rename action" },
              { loc: [19, 27], note: "reducer to receive it with a default" },
              { loc: [28, 37], note: "always have it capitalized" },
              { loc: [39, 45], note: "and export the logic" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act4/kea-index.example")}
            ranges={[
              { loc: [0, 270], title: "homepage index.js" },
              { loc: [0, 1], note: "get the styles" },
              { loc: [2, 6], note: "required imports" },
              { loc: [7, 8], note: "import one component" },
              { loc: [9, 11], note: "the logic (data access) for the scene and slider" },
              { loc: [12, 13], note: "we require the updateName action, so tear it out" },
              { loc: [14, 24], note: "what data do we want and from where" },
              { loc: [25, 36], note: "specify the type of data coming in" },
              { loc: [57, 58], note: "and this is how we render it" },
              { loc: [58, 63], note: "first destructure the props" },
              { loc: [64, 82], note: "and then render it" },
              { loc: [66, 67], note: "the slider" },
              { loc: [67, 74], note: "the title with a link" },
              { loc: [74, 82], note: "and the info" },
              { loc: [46, 56], note: "the action to update the name" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act4/kea-scene.example")}
            ranges={[
              { loc: [0, 270], title: "homepage scene.js" },
              { loc: [0, 1], note: "a small helper" },
              { loc: [2, 8], note: "import the homepage files" },
              { loc: [9, 13], note: "import the slider" },
              { loc: [14, 26], note: "combine them" }
            ]}
          />

          <Slide transition={["slide"]} bgImage={images.bg.kea1.replace("/", "")} bgDarken={0.85}>
            <Heading size={1} caps fit textColor="white">
              To summarise
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                It's 100% react, redux, webpack
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="white">
                Simplicity and developer happiness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                It's designed to be highly maintainable
              </Heading>
            </Appear>
            <Appear fid="0">
              <Heading size={1} caps fit textColor="white">
                I want it to be a community project
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.bg.kea1.replace("/", "")} bgDarken={0.85}>
            <Heading size={1} caps fit textColor="white">
              Batteries included
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Each scene is dynamically loaded
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="white">
                Hot reloading while developing
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Did I mention simplicity?
              </Heading>
            </Appear>
            <Appear fid="0">
              <Heading size={1} caps fit textColor="white">
                ... oh, and one more thing
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="white">
              Act V
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Heading size={1} caps fit textColor="primary">
              KEA-ON-RAILS
            </Heading>
            <Appear>
              <Text textColor="white">
                This is the last one, I swear!
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            transition={["fade"]}
            lang="bash"
            code={require("raw!../assets/act5/files.example")}
            ranges={[
              { loc: [0, 270], title: "folder structure" },
              { loc: [0, 4], note: "instead of this" },
              { loc: [10, 20], note: "do this" },
              { loc: [25, 32], note: "instead of this" },
              { loc: [37, 45], note: "do this" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act5/routes-ruby.example")}
            ranges={[
              { loc: [0, 270], title: "inside routes.rb" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act5/routes-js.example")}
            ranges={[
              { loc: [0, 270], title: "kea routes.js" },
              { loc: [0, 6], note: "instead of this" },
              { loc: [7, 10], note: "do this" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="ruby"
            code={require("raw!../assets/act5/controller.example")}
            ranges={[
              { loc: [0, 270], title: "controller.rb" },
              { loc: [0, 4], note: "define it like this" },
              { loc: [5, 15], note: "delegate everything to service objects" },
              { loc: [16, 24], note: "sample adding action" },
              { loc: [25, 33], note: "sample removing action" },
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act5/promise.example")}
            ranges={[
              { loc: [0, 270], title: "import the controller" },
              { loc: [0, 1], note: "no, really, import controller.rb in your .js file" },
              { loc: [2, 4], note: "call out one of the methods" },
              { loc: [4, 9], note: "and handle the response" }
            ]}
          />

          <CodeSlide
            transition={["fade"]}
            lang="jsx"
            code={require("raw!../assets/act5/saga.example")}
            ranges={[
              { loc: [0, 270], title: "or in a saga" },
              { loc: [0, 2], note: "looks weird?" },
              { loc: [4, 6], note: "call it out" },
              { loc: [7, 14], note: "and handle the response" }
            ]}
          />

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              The end!
            </Heading>
            <Heading lineHeight={1} size={1}>
              &nbsp;
            </Heading>
            <Link href="https://twitter.com/mariusandra" lineHeight={2}>
              <Text bold textColor="white">@mariusandra</Text>
            </Link>
            <br/>
            <Link href="https://kea.rocks" lineHeight={2}>
              <Text bold textColor="white">http://kea.rocks/</Text>
            </Link>
          </Slide>

          <Slide bgColor="black" height="100%">
            <Layout height="100%">
              <Fill height="100%">
                <iframe width="100%" height="100%" style={{minHeight: '500px'}} src="https://www.youtube.com/embed/oAhzmULgoqI?start=480" frameBorder="0" allowFullScreen></iframe>
              </Fill>
            </Layout>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
