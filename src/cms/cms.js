import CMS from "netlify-cms-app"
import { ru } from "netlify-cms-locales"
import "./cms.css"

CMS.registerLocale("ru", ru)

CMS.registerPreviewStyle("cms.css")
