import { showContent } from './setup/setup'

showContent({
  title: 'title',
  onDestroy: () => console.log('destroy'),
})
