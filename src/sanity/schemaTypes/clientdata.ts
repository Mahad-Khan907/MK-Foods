import { defineType, defineField } from 'sanity';

export const clientdata = defineType({
  name: 'clientdata',
  title: 'Client Data',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      options: {
        list: [
          { title: 'Karachi', value: 'Karachi' },
        ],
      },
    }),
    defineField({
      name: 'foodItem',
      title: 'Food Item Name',
      type: 'string',
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    }),
  ],
});
