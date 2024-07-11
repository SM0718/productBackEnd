import React, { useId } from 'react'

const Input = React.forwardRef(function Input({ label, type = 'text', className, labelStyle, required, ...props }, ref) {
  const id = useId()
  return (
    <>
      {label && (
        <label className={labelStyle} htmlFor={id}>
          {label} {required && <span className="text-red-600 text-sm">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea className={`${className}`} id={id} ref={ref} {...props} />
      ) : (
        <input className={`${className}`} type={type} id={id} ref={ref} {...props} />
      )}
    </>
  )
})

export default Input

// import React, { useId, useState, useEffect } from 'react';

// const Input = React.forwardRef(function Input({ label, type = 'text', className, labelStyle, required, ...props }, ref) {
//   const id = useId();

//   // State to handle image preview
//   const [preview, setPreview] = useState(null);

//   // Effect to update the preview when a new image is selected
//   useEffect(() => {
//     if (type === 'file' && props.accept?.includes('image') && props.value?.[0]) {
//       const file = props.value[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setPreview(null);
//     }
//   }, [props.value, type, props.accept]);

//   return (
//     <>
//       {label && (
//         <label className={labelStyle} htmlFor={id}>
//           {label} {required && <span className="text-red-600 text-sm">*</span>}
//         </label>
//       )}
//       {type === 'textarea' ? (
//         <textarea className={`${className}`} id={id} ref={ref} {...props} />
//       ) : (
//         <input className={`${className}`} type={type} id={id} ref={ref} {...props} />
//       )}
//       {type === 'file' && preview && (
//         <img src={preview} alt="Selected" className="mt-4 w-full h-auto rounded-md" />
//       )}
//     </>
//   );
// });

// export default Input;
