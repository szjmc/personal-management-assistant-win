export default function Card({ children, title, icon, ...props }) {
    return (
      <div 
        className="p-4 bg-white rounded shadow hover:bg-gray-50 transition duration-200" 
        {...props}
      >
        <div className="flex items-center mb-2">
          {icon && (
            <div className="mr-2">
              {icon({ className: "w-4 h-4" })}
            </div>
          )}
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <div className="text-gray-800">
          {children}
        </div>
      </div>
    );
  }