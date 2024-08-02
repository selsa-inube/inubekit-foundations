<p align="center">
  <a href="https://github.com/selsa-inube">
    <img src="https://avatars.githubusercontent.com/u/112717130?s=200&v=4?raw=true" alt="Chakra logo" width="50" height="50" />
  </a>
</p>


<br />

Inubekit-foundations is a library that defines and exports structured tokens to be used across all components of the Inubekit project. This library ensures an organized structure in accordance with the design token model.

## Table of contents

- 📋 [Documentation](#documentation)
- 📦 [Installation](#installation)
- 💻 [Usage](#usage)

## Documentation

The tokens are designed to follow a specific method for fulfilling the color requirements of a component, as outlined below:
<br /> 
1. ### Tokens Structure
![image](https://github.com/selsa-inube/design-system-web/assets/45011420/9204e875-bfa1-471d-b615-19e19ec06ab2)

   - **A. Business Unit**: Defines which unit the token belongs to.
   - **B. Component**: Specifies the component to modify.
   - **C. Appearance**: Indicates the state the component should take.
   - **D. Block**: Defines the characteristic the token should receive.
   - **E. Element**: Specifies the design attribute.
   - **F. Modifier**: Defines how the component should look.

2. ### Conditions
   - **1. Content**: Applies to border, background, text, and icon components.
   - **2. Contrast**: Applies to texts, icons, and spinners when the background is filled.
   - **3. Hover**: When filled, texts and icons do not support hover effects.
     
  
<br />

- **Palette**: Color palette that is used within the design system.
  
![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/01c26359-83fa-4c62-9859-5b15ac53281b)
![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/a8cebb06-d35c-4411-b736-7f3ab5955695)
<br />
![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/4b34afc2-1edf-46ac-9935-d18b14741796)
![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/0875b47f-cda0-4817-a958-fcd1cac04280)

<br />

Therefore, the tokens for the various components utilize the palette tokens, for example:

**inube.button.primary.content.color.regular**
<br />
![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/68114487-2989-4cb3-80a7-bc66f9bdd1fc)



**For more information about the tokens available for the components and how they are used, please follow this link:**
<br />
👉 [Inubekit-tokens](https://senlinea.sharepoint.com/:x:/s/inube/EYl-RVhzOABDmWH3tFVyegwB3iThvuqaguUGBrrA5UFiQw?e=mYyAKa)

<br />

**For more information about what are design tokens and how to use them please follow this link:**
<br />
👉 [What-are-design-tokens](https://css-tricks.com/what-are-design-tokens/) 

## Installation

To use inubekit tokens, all you need to do is run the following command:

```sh
# with npm
$ npm install @inubekit/foundations

```
## Usage

To use an Inubekit tokens in your project, import it from the package and include it in your code. Here’s an example using the button component:

To start using the tokens, please follow these steps:

1. Make sure that the component is listed in package.json with the latest available version.

```js
  "dependencies": {
    "@inubekit/foundations": "^5.2.5"
    ...
    }

```

2. Use it on your component:

```jsx
import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledLabel = styled.label`
  font-family: ${({ theme }) =>
      theme?.typography?.label?.[$size]?.font || "Roboto"},
    sans-serif;
  font-size: ${({ $size }) => inube.typography.label[$size].size};
  font-weight: ${({ $size }) => inube.typography.label[$size].weight};
  letter-spacing: ${({ $size }) => inube.typography.label[$size].tracking};
  line-height: ${({ $size }) => inube.typography.label[$size].lineHeight};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  color: ${({ theme, $disabled, $focused, $invalid }) => {
    if ($disabled) {
      return (
        theme?.label?.content?.color?.disabled ||
        inube.label.content.color.disabled
      );
    }

    if ($invalid) {
      return (
        theme?.label?.content?.color?.invalid ||
        inube.label.content.color.invalid
      );
    }

    if ($focused) {
      return (
        theme?.label?.content?.color?.focus || inube.label.content.color.focus
      );
    }

    return (
      theme?.label?.content?.color?.regular || inube.label.content.color.regular
    );
  }};
`;

export { StyledLabel };
```

3. Example
![image](https://github.com/selsa-inube/design-system-web/assets/45011420/877e96fc-e85a-4ead-b0b2-334d54e78561)

At this point, you are probably wondering why we use the structure theme?.label?.content?.color?.regular || inube.label.content.color.regular. The reason is simple: by default, our components will use the Inube theme. However, since the components can be customized using the same token structure but with a different palette, you can achieve results like this:
<br />
<br />

We are going to use `<Button/>` in order to explain

<br />
- **inube theme: inube.button.primary.content.color.regular**

![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/28bc18c3-1886-47ed-84ef-a3a9baac5a98)
  
<br />

- **customized theme: [Your-Customized-Theme].button.primary.content.color.regular**

![image](https://github.com/selsa-inube/inubekit-foundations/assets/45011420/e48339af-1cc1-44e5-a0b6-76465e2335c1)

<br />

**There are also typography tokens, which are used in specific contexts where a particular type of text or alignment for inputs is required, such as in `<Text/>`, `<TextField/>`, and similar components.**

<br />

<p  align="center"> Made with ❤️ by Inube </p>


