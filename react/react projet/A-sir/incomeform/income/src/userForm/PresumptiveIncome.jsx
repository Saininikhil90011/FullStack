// import React, { useState } from "react";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   ListSubheader,
// } from "@mui/material";

// const BusinessNatureSelect = () => {
//   const [businessNature, setBusinessNature] = useState("");

//   // Business Nature options organized by sections
//   const options = [
//     {
//       label: "Section 44AE",
//       items: [{ value: "9999", label: "Goods Carriage (Section 44AE)" }],
//     },
//     {
//       label: "Section 44ADA",
//       items: [
//         { value: "16001", label: "Legal profession" },
//         { value: "16002", label: "Accounting, book-keeping & auditing profession" },
//         { value: "16003", label: "Tax consultancy" },
//         { value: "16004", label: "Architectural profession" },
//         { value: "16005", label: "Engineering & technical consultancy" },
//         { value: "16007", label: "Fashion designing" },
//         { value: "16008", label: "Interior decoration" },
//         { value: "14001", label: "Software development" },
//         { value: "14002", label: "Other software consultancy" },
//         { value: "14003", label: "Data processing" },
//         { value: "14005", label: "Other IT enabled services" },
//         { value: "18001", label: "General hospitals" },
//         { value: "18004", label: "Diagnostic centers" },
//         { value: "18010", label: "Medical clinics" },
//         { value: "18017", label: "Medical education" },
//       ],
//     },
//     {
//       label: "Section 44AD",
//       items: [
//         { value: "01001", label: "Growing & manufacturing of tea" },
//         { value: "01010", label: "Agricultural & animal husbandry services" },
//         { value: "01013", label: "Growing of timber, plantation, etc." },
//         { value: "09028", label: "Retail sale of other products n.e.c" },
//         { value: "11001", label: "Travel agencies & tour operators" },
//         { value: "14010", label: "Other computation-related services" },
//       ],
//     },
//   ];

//   const handleChange = (event) => {
//     setBusinessNature(event.target.value);
//   };

//   return (
//     <FormControl fullWidth variant="outlined" sx={{ my: 2 }}>
//       <InputLabel id="business-nature-label">Business Nature</InputLabel>
//       <Select
//         labelId="business-nature-label"
//         value={businessNature}
//         onChange={handleChange}
//         label="Business Nature"
//       >
//         <MenuItem value="">
//           <em>Please Select</em>
//         </MenuItem>
//         {options.map((group, index) => (
//           <React.Fragment key={index}>
//             <ListSubheader>{group.label}</ListSubheader>
//             {group.items.map((item) => (
//               <MenuItem key={item.value} value={item.value}>
//                 {item.label}
//               </MenuItem>
//             ))}
//           </React.Fragment>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default BusinessNatureSelect;


import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from "@mui/material";

const BusinessNatureSelect = () => {
  const [businessNature, setBusinessNature] = useState("");

  // Flattened array for business nature options
  const options = [
    { value: "9999", label: "Goods Carriage (Section 44AE)", category: "Section 44AE" },
    { value: "16001", label: "Legal profession", category: "Section 44ADA" },
    { value: "16002", label: "Accounting, book-keeping & auditing profession", category: "Section 44ADA" },
    { value: "16003", label: "Tax consultancy", category: "Section 44ADA" },
    { value: "16004", label: "Architectural profession", category: "Section 44ADA" },
    { value: "16005", label: "Engineering & technical consultancy", category: "Section 44ADA" },
    { value: "16007", label: "Fashion designing", category: "Section 44ADA" },
    { value: "16008", label: "Interior decoration", category: "Section 44ADA" },
    { value: "14001", label: "Software development", category: "Section 44ADA" },
    { value: "14002", label: "Other software consultancy", category: "Section 44ADA" },
    { value: "14003", label: "Data processing", category: "Section 44ADA" },
    { value: "14005", label: "Other IT enabled services", category: "Section 44ADA" },
    { value: "18001", label: "General hospitals", category: "Section 44ADA" },
    { value: "18004", label: "Diagnostic centers", category: "Section 44ADA" },
    { value: "18010", label: "Medical clinics", category: "Section 44ADA" },
    { value: "18017", label: "Medical education", category: "Section 44ADA" },
    { value: "01001", label: "Growing & manufacturing of tea", category: "Section 44AD" },
    { value: "01010", label: "Agricultural & animal husbandry services", category: "Section 44AD" },
    { value: "01013", label: "Growing of timber, plantation, etc.", category: "Section 44AD" },
    { value: "09028", label: "Retail sale of other products n.e.c", category: "Section 44AD" },
    { value: "11001", label: "Travel agencies & tour operators", category: "Section 44AD" },
    { value: "14010", label: "Other computation-related services", category: "Section 44AD" },
  ];

  const handleChange = (event) => {
    setBusinessNature(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ my: 2 }}>
      <InputLabel id="business-nature-label">Business Nature</InputLabel>
      <Select
        labelId="business-nature-label"
        value={businessNature}
        onChange={handleChange}
        label="Business Nature"
      >
        <MenuItem value="">
          <em>Please Select</em>
        </MenuItem>
        {Array.from(new Set(options.map((option) => option.category))).map((category) => (
          <React.Fragment key={category}>
            <ListSubheader>{category}</ListSubheader>
            {options
              .filter((option) => option.category === category)
              .map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
          </React.Fragment>
        ))}
      </Select>
    </FormControl>
  );
};

export default BusinessNatureSelect;
