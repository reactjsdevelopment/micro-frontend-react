import * as React from 'react';
import { lazy } from 'react';


export const EnhancedComponent = (OriginalComponent) => {
    console.log(OriginalComponent, 'scds')
    class NewComponent extends React.Component {
  
        // Logic here

        render() {
            // Pass the callable props to Original component
            return <OriginalComponent name="GeeksforGeeks"  /> 
        }
    }
    // Returns the new component
    return NewComponent
}
  


// usage
// export default EnhancedComponent(App);

export const withLoading = WrappedComponent => {
  console.log(WrappedComponent)
  return (props = {}) => {
  console.log(props)

    if (props['isLoading']) {
      return <div>higher order component</div>
    }
    return <WrappedComponent {...props} />
  }
}

export const MyComponent = ({ name, branding, isLoading }) => (
<header>
  <h1>{name}</h1>
  
</header>
)

export const WithLoadingComponent: React.FC<IMyProps> = withLoading(MyComponent);

interface IMyProps {
    isLoading?: boolean,
    name?: string;
}