// components/CardActionsModal.tsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Card } from '@/lib/types/cards';

export default function CardActionsModal({ 
  card,
  isOpen,
  onClose 
}: {
  card: Card;
  isOpen: boolean;
  onClose: () => void;
}) {
//   const [selectedAction, setSelectedAction] = useState<string | null>(null);
  
  const cardActions = [
    { id: 'freeze', name: card.status === 'ACTIVE' ? 'Freeze Card' : 'Activate Card' },
    { id: 'lost', name: 'Report Lost' },
    { id: 'stolen', name: 'Report Stolen' },
    { id: 'limit', name: 'Change Daily Limit' },
    { id: 'cancel', name: 'Cancel Card' },
  ];

  const handleAction = (action: string) => {
    // Implement card action logic here
    console.log(`Performing ${action} on card ${card.id}`);
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Manage Card •••• {card.card_number.slice(-4)}
                </Dialog.Title>
                
                <div className="mt-4 space-y-2">
                  {cardActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleAction(action.id)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {action.name}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}