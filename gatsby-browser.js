/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/cursor.scss";
import CustomCursor from './src/utils/cursor';

export const onClientEntry = () => {
    CustomCursor.init();
};