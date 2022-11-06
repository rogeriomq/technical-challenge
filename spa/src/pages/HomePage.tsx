import { ToastContainer } from 'react-toastify'
import ReactTooltip from 'react-tooltip'
import { CustomHeader } from '../components/CustomHeader'
import { TabNavigation } from '../components/TabNavigation'
export function HomePage() {
  return (
    <>
      <main className='container mx-auto flex flex-col h-screen bg-slate-100'>
        <CustomHeader />
        <TabNavigation />
        <ToastContainer autoClose={3000} closeOnClick={true} closeButton={true}/>
        <ReactTooltip />
      </main>
    </>
  )
}
