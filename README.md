#### Instructions

The app was written without Redux as there wasn't a need to introduce state management for a small app like this, and passing props seemed to be the right way forward.

Normally I would have individual CSS files with the styled components in them, then import them into each individual component. However, as the initial skeleton of the app had the styledComponents in each individual file, I opted to keep that structure.

I would also have used a GRID to achieve better results and not have to use empty TableCells, however, as the skeleton for the Table was there, and some CSS already implemented, I kept it as a Table.

I have moved all Types/interfaces to types.ts as a couple of them were being used in 2-3 spots, and it made sense to have all of them in a central location.

I've also created a CONSTANTS.ts file to ensure that some variables are consistent across components.

###

Regarding tests: I wrote a couple of unit tests in the utils.test.ts file. Those two pass. However, while writing some snapshot tests for other components, I have been getting an error (per below). It seems to be based on the node/npm versions I am using. I left these tests in the code-base for your viewing, however I am not able to truly see if they are snapshotting correctly.

Test suite failed to run

    Cannot find module 'react-dom/client' from 'node_modules/@testing-library/react/dist/pure.js'

    Require stack:
      node_modules/@testing-library/react/dist/pure.js
      node_modules/@testing-library/react/dist/index.js
      src/components/DetailedHeader/DetailedHeader.test.tsx

    > 1 | import { render } from "@testing-library/react";

#### To Run

You will need to run the following:

```
npm install
```

...and then...

```
npm start
```
