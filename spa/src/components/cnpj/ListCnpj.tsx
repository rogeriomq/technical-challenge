import { ICnpj } from '../../interfaces'
import { cnpjHelper } from '../../utils/cnpjHelpers'
import { EditIcon, TrashAltIcon } from '../common/Icons'

type ListCnpjProps = {
  items: ICnpj[],
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

export function ListCnpj({ items, onEdit, onRemove }: ListCnpjProps) {
  return (
    <>
      <ul className="space-y-2">
        {
          items.map((item) => (
            <li key={item.id} className="w-full">
              <div className="w-full flex justify-between p-2 rounded-lg bg-slate-200" >
                <span className="font-semibold text-lg text-primary/80 ">
                  {cnpjHelper.format(item.value)}
                </span>
                <div className="flex space-x-3">
                  <EditIcon
                    className="text-primary w-6 h-6 cursor-pointer
                  hover:text-secondary
                  active:h-5"
                    data-tip='Edit CNPJ'
                    aria-label="Edit Icon"
                    aria-details="Press icon to edit CNPJ"
                    onClick={() => onEdit(item.id)}
                  />
                  <TrashAltIcon
                    className="text-primary w-6 h-6 cursor-pointer
                    hover:text-red-500
                    active:h-5"
                    data-tip="Remove CNPJ"
                    aria-label="Edit Icon"
                    aria-details="Press icon to edit CNPJ"
                    onClick={() => onRemove(item.id)}
                  />
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}
