// ... existing code ...
<button 
  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
           transition-colors duration-200 disabled:opacity-50"
  disabled={isLoading}
>
  {isLoading ? 'Loading...' : children}
</button>
// ... existing code ...