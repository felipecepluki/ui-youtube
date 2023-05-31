import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import Videos from '@/components/Videos'

export default function Home() {
  return (
    <main className="flex-1">
      <Navigation />
      <div className="flex flex-row">
        <Sidebar />
        <Videos />
      </div>
    </main>
  )
}
