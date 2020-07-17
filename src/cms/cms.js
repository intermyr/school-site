import CMS from "netlify-cms-app"
import { ru } from "netlify-cms-locales"
import "./cms.css"

CMS.registerLocale("ru", ru)

CMS.registerPreviewStyle("cms.css")

CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: "id", label: "Youtube Video ID", widget: "string" }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      id: match[1],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return "youtube " + obj.id
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      '<img src="http://img.youtube.com/vi/' +
      obj.id +
      '/maxresdefault.jpg" alt="Youtube Video"/>'
    )
  },
})

CMS.registerEditorComponent({
  // Internal id of the component
  id: "document",
  // Visible label
  label: "Документ",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: "title", label: "Заголовок", widget: "string" },
    { name: "file", label: "Выберите документ", widget: "file" },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /\[(\S+)\]\((\/img\/\S+)\)/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      title: match[1],
      file: match[2],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return `[${obj.title}](${obj.file})`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return <a href="${obj.file}">${obj.title}</a>
  },
})
