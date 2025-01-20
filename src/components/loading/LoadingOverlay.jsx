import React from 'react'

const LoadingOverlay = ({ message, isLoading}) => {
  return isLoading ? (
    <>
      < div className="fixed top-0 left-0 z-50 w-full h-full bg-slate-900/50 flex justify-center items-center" >
        <div className="bg-emerald-600 p-4 rounded-lg shadow-lg border-2 border-gray-50">
          <div className="flex items-center justify-center space-x-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C6.373 0 0 6.373 0 12h4z"></path>
            </svg>
            <p className="text-white">{message}</p>
          </div>
        </div>
      </div >
    </>
  ) : null
}

export default LoadingOverlay