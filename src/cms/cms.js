import CMS from "netlify-cms-app"
import { ru } from "netlify-cms-locales"
import "../styles/cms-preview.css"

CMS.registerLocale("ru", ru)

CMS.registerPreviewStyle("../styles/cms-preview.css")
