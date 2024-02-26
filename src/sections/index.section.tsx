import { ChangeEvent, FC, ReactElement } from "react";
import { country_list } from "../mock/country.mock";
import CheckboxComponent from "../components/checkbox.component";
import ContainerComponent from "../components/container.component";
import { HookCountryModelStruct } from "../models/hook.model";
import { useCountry } from "../hooks/useCountry";
import { FuncModelStruct } from "../models/function.model";

const IndexSection: FC = (): ReactElement => {
    // El hook contendrá todas las funciones y estados.
    const { removeCountry, addCountry, selectAllCountry, selectAll, checkboxMaster }: HookCountryModelStruct = useCountry();   

    const onCheckboxClick: FuncModelStruct<ChangeEvent<HTMLInputElement>, void> = (event?: ChangeEvent<HTMLInputElement>): void => {
        if (!event) {
            return;
        }

        const checked: boolean = event.currentTarget["checked"];
        const id: string = event.currentTarget["id"];
        
        if (!checked) {
            removeCountry(id);  
            return;
        }
        
        addCountry(id);
    };

    return (
        <ContainerComponent style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <CheckboxComponent 
                id="checkboxSelectAll"
                onChange={(): void => selectAllCountry()} 
                title="Select all"
                checked={checkboxMaster}
            />

            {
                country_list.map((country: string, index: number): ReactElement => {
                    return  (
                        <CheckboxComponent 
                            id={(index + 1).toString()}
                            key={index} 
                            title={country}
                            onChange={(ev): void => onCheckboxClick(ev)}
                            checked={selectAll}
                        />
                    );
                })
            }
        </ContainerComponent>
    );
};

export default IndexSection;