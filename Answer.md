Q1: Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

Ans:
 one-to-Many Relationship: 

 In product table the category_id column is a foreign key , which references the primary key (id) of the product_category table. It means

 --> A product can only belong to one Category which is represented by the category_id (foreign key in the Product table)

 --> A category can have many products beacuse the category_id column in the Product table is a foreign key that references the id column in the Product_Category table. 

 for example lets suppose 
  we have two product one is redmi phone and  iphone both have unique id in product table but they have same category_id because both belongs to "electronics" category in the Product_category table.


Q2: How could you ensure that each product in the "Product" table has a valid category assigned to it?

Ans: 
    1.Data validation on insert or update:
      in product table i will define  foreign key constraint that references the primary key(id) of the product_category table. This will insure that any value inserted into category_id must exist as a valid category id in the product_category table.

    2.software Logic(Maintaining a List and Admin Approval)
      i am going to maintains a separate list of all existing categories just like for book we have only two categories i.e (Fiction , non-fiction)

      if user try to give other categories like "mystery" then either i will give error message or in admin side i will create another categories type i.e mystery and this categories later be approved by admin if it is correct according to admin.

   3.Default Category but Manual Intervention required
     if user does not give any category then on that time default category will assign However, an administrator will be required to manually assign the proper category to the product on the admin side

    
     