import { Channel } from '@/components/Channel'
import { Header } from '@/components/Header'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import Videos from '@/components/Videos'

export default function Home() {
  return (
    <main className="flex-1">
      <Navigation />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Header />
          <Channel />
        </div>
      </div>
    </main>
  )
}
