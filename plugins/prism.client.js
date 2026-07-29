import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

export default (_, inject) => {
  inject('prism', Prism)
}
