import type { Preview } from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";
import {Theme} from "../../src/app/providers/themeProvider/lib/themeContext"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator,ThemeDecorator(Theme.NORMAL),RouterDecorator]
};

export default preview;


