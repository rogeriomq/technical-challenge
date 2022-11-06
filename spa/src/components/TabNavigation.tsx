import { Tab } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useCnpj } from '../hooks/useCnpj'
import { useCpf } from '../hooks/useCpf'
import { DialogFormCnpj } from './cnpj/DialogFormCnpj'
import { ListCnpj } from './cnpj/ListCnpj'
import { ToolbarCnpj } from './cnpj/ToolbarCnpj'
import { TabButton } from './common/TabButton'
import { DialogFormCpf } from './cpf/DialogFormCpf'
import { ListCpf } from './cpf/ListCpf'
import { ToolbarCpf } from './cpf/ToolbarCpf'
import { ServerStatusPane } from './serverStatus/ServerStatusPane'

const tabTitles = ['CPF', 'CNPJ', 'Server Status']

export function TabNavigation() {
  const { cpfs, getCpfById, getCpfs, storeCpf, removeCpf, sortCpf, setSortCpf, setFilterCpf } = useCpf()
  const { cnpjs, getCnpjById, getCnpjs, storeCnpj, removeCnpj, sortCnpj, setSortCnpj, setFilterCnpj } = useCnpj()

  const [selectedTab, setSelectedTab] = useState(0)

  const [cpfId, setCpfId] = useState(0)
  const [cnpjId, setCnpjId] = useState(0)
  const [isOpenFormCpf, setIsOpenFormCpf] = useState(false)
  const [isOpenFormCnpj, setIsOpenFormCnpj] = useState(false)

  const onOpenFormCpf = (id: number) => {
    setIsOpenFormCpf(() => {
      setCpfId(id)
      return true
    })
  }

  const onOpenFormCnpj = (id: number) => {
    setIsOpenFormCnpj(() => {
      setCnpjId(id)
      return true
    })
  }

  // On close CPF Form, reset cpfId.
  useEffect(() => {
    if (!isOpenFormCpf) {
      setCpfId(0)
    }
  }, [isOpenFormCpf])

  // On close CNPJ Form, reset cnpjId.
  useEffect(() => {
    if (!isOpenFormCnpj) {
      setCnpjId(0)
    }
  }, [isOpenFormCnpj])

  // get CPFs/CNPJs on enter tab
  useEffect(() => {
    const actionByTab = [getCpfs, getCnpjs, () => true]
    actionByTab[selectedTab]()
  }, [getCnpjs, getCpfs, selectedTab])

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-2 p-1">
          {
            tabTitles.map(tabTitle => (
              <Tab as={Fragment} key={tabTitle}>
                {
                  ({ selected }) => (
                    <div className="w-full">
                    <TabButton selected={selected}>
                      {tabTitle}
                    </TabButton>
                    </div>
                  )
                }
              </Tab>
            ))
          }

        </Tab.List>
        <Tab.Panels className="p-1 mt-4 md:mt-10">
          <Tab.Panel className="flex flex-col">
            <ToolbarCpf
              setIsOpen={setIsOpenFormCpf}
              getCpfs={getCpfs}
              sort={sortCpf}
              setSort={setSortCpf}
              setFilter={setFilterCpf}
            />
            <ListCpf items={cpfs} onEdit={onOpenFormCpf} onRemove={removeCpf} />
            <DialogFormCpf
              id={cpfId}
              isOpen={isOpenFormCpf}
              setIsOpen={setIsOpenFormCpf}
              getCpfById={getCpfById}
              storeCpf={storeCpf}
            />
          </Tab.Panel>

          <Tab.Panel className="flex flex-col">
            <ToolbarCnpj
              setIsOpen={setIsOpenFormCnpj}
              getCnpjs={getCnpjs}
              sort={sortCnpj}
              setSort={setSortCnpj}
              setFilter={setFilterCnpj}
            />
            <ListCnpj items={cnpjs} onEdit={onOpenFormCnpj} onRemove={removeCnpj} />
            <DialogFormCnpj
              id={cnpjId}
              isOpen={isOpenFormCnpj}
              setIsOpen={setIsOpenFormCnpj}
              getCnpjById={getCnpjById}
              storeCnpj={storeCnpj}
            />
          </Tab.Panel>

          <Tab.Panel className="flex flex-col">
            <ServerStatusPane />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
