import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Alert from '../alerts/Alert.component'

import { CheckCircle2, AlertTriangle} from 'lucide-react'

const ConnectivityStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [downlink, setDownlink] = useState(navigator.connection.downlink);
  const [displayStatus, setDisplayStatus] = useState(false)

  console.log("navigator:", navigator)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setTimeout(() => setDisplayStatus(true), 4000)
    };

    const handleOffline = () => {
      setIsOnline(false);
      setTimeout(() => setDisplayStatus(true), 4000)
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    const updateDownlink = () => {
      setDownlink(navigator.connection.downlink);
    };
    navigator.connection.addEventListener('change', updateDownlink);
    setDisplayStatus(true)
    

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.connection.removeEventListener('change', updateDownlink);
    };
  }, []);

  useEffect(() => {
    if (displayStatus) {
      setTimeout(() => setDisplayStatus(false), 4000)
    }
  }, [displayStatus, isOnline])

  const renderAlertStatus = status => {
    if (status) {
      return <Alert 
        icon={<CheckCircle2 className="w-10 h-10" />}
        message={`
        You are now connected! 
        ᯤ ${downlink} Mbps.
        
        `}
        bgColor="bg-green-600"
      />
    }  
    
    return <Alert icon={<AlertTriangle className="w-10 h-10" />} message="You are currently offline!" />
  }

  return (
    <motion.div
      exit={{ duration: .4, ease: 'ease-in-out'}}
      className={`connection-status ${isOnline ? 'online' : 'offline'} px-3.5`}
    >
      <AnimatePresence>
        {displayStatus && renderAlertStatus(isOnline)}
      </AnimatePresence>
    </motion.div>
  );
}

export default ConnectivityStatus;