import { ICpf } from '../../interfaces'
import { cpfHelper } from '../../utils/cpfHelpers'
import { EditIcon, TrashAltIcon } from '../common/Icons'

type ListCpfProps = {
  items: ICpf[],
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

export function ListCpf({ items, onEdit, onRemove }: ListCpfProps) {
  return (
    <>
      <ul className="space-y-2">
        {
          items.map((item) => (
            <li key={item.id} className="w-full">
              <div className={'w-full flex justify-between p-2 rounded-lg bg-slate-200'} >
                <span className="font-semibold text-lg text-primary/80 ">
                  {cpfHelper.format(item.value)}
                </span>
                <div className="flex space-x-3">
                  <EditIcon
                    className="text-primary w-6 h-6 cursor-pointer
                  hover:text-secondary
                  active:h-5"
                    data-tip='Edit CPF'
                    aria-label="Edit Icon"
                    aria-details="Press icon to edit CPF"
                    onClick={() => onEdit(item.id)}
                  />
                  <TrashAltIcon
                    className="text-primary w-6 h-6 cursor-pointer
                    hover:text-red-500
                    active:h-5"
                    data-tip="Remove CPF"
                    aria-label="Edit Icon"
                    aria-details="Press icon to edit CPF"
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
