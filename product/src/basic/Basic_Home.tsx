import React, { useState } from "react"
import { Counter } from "./Counter"
import { Parent } from "./Parent_Communication"
import { Ref_Forwarding } from "./Ref_forwarding"
import { MapUsage } from "./Map"
import { WithLoadingComponent } from "./higher-order"
import { lazy, Suspense } from 'react';
import { ClassBase } from "./class-base"
import StyledComp from "./styled"
import TestApp from './test';
import { UseCallbackPlayer } from './useCallback-hook';
import { UseLayoutEffectDemo } from './useLayoutEffect-hook';

import { Exam } from './useContext-hook';
import UseEffectHookApp from './useEffect-hooks';
import {
    ParentComp, UseImperativeHandleHook,
} from './useImperativeHandle-hook';
import { HeavyCalculate, Memo, UseMemoApp } from './useMemo-hook';
// import { UseReducerComp } from './useReducer-hook';
import { UseRefComp } from './useRef-hook';
import { UseReducerComp } from './useReducer-hook';
import useFetch from './Custom-hook';

export default function Basic_Home() {
    const Artists = lazy(() => import('./styled'));
    const [show, setShow] = useState(true);

    function showModal() {
        setShow(true);
    }

    function hideModal() {
        setShow(false);
    }
    function markdownify() {
        return '<p>...</p>';
    }

    return (
        <div className="p-5 bg-blue-500 text-white -text-3xl font-bold">
            {/* <Counter hasResetButton={true} initialCounterValue={1} /> */}
            {/* <MapUsage/> */}
            {/* <Parent app='hi'/> */}
            {/* <Ref_Forwarding/> */}

            {/* <ClassBase /> */}
            {/* <Suspense fallback={<h1>Still Loading… lazy load Comp</h1>}>
                <Artists />
            </Suspense> */}
            {/* <WithLoadingComponent isLoading={false} name="tesdt"/> */}
            {/* <WithLoadingComponent /> */}

            {/* <TestApp/> */}
            {/* <main>
        <h1>React Modal</h1>
        <Modal show={show} handleClose={hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={showModal}>
          Open
        </button>
      </main> */}
            {/* <UseEffectHookApp/> */}
            {/* <UseReducerComp/> */}
            {/* <UseRefComp/> */}
            {/* <div dangerouslySetInnerHTML={{__html: markdownify()}} /> */}
            {/* <UseCallbackPlayer/> */}
            {/* <UseLayoutEffectDemo/> */}
            {/* <ParentComp/> */}
            {/* <UseImperativeHandleHook/> */}
            {/* <Memo/> */}
            {/* <HeavyCalculate/> */}
            {/* <Exam/> */}
            {/* <Home /> */}
        </div>
    )
}