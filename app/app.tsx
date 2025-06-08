import {
  SidebarInset,
  SidebarProvider,
} from './components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const location = useLocation() // Get current route location

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AnimatePresence>
          <motion.div
            key={location.pathname} // Important: triggers animation on route change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Outlet /> {/* Render matched route component here */}
          </motion.div>
        </AnimatePresence>
      </SidebarInset>
    </SidebarProvider>
  )
}
