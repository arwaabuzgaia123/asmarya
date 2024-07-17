import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Book } from '../domain/book.entity';
import { BookGenre } from '../domain/enumeration/book-genre';
import { Language } from '../domain/enumeration/language';
import { BookAvailability } from '../domain/enumeration/book-availability';
import { Learner } from '../domain/learner.entity';
import { LearnerType } from '../domain/enumeration/learner-type';
import { BookBorrowRequestStatus } from '../domain/enumeration/book-borrow-request-status';
import { BookBorrowRequest } from '../domain/book-borrow-request.entity';
import { Category } from '../domain/category.entity';
import { PaymentMethod } from '../domain/payment-method.entity';
import { PaymentType } from '../domain/enumeration/payment-type';
import { Course } from '../domain/course.entity';
import { Order } from '../domain/order.entity';
import { OrderStatus } from '../domain/enumeration/order-status';

export class SeedData1570200490073 implements MigrationInterface {
  books: Book[] = [
    {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      isbn: '9780316769488',
      genre: BookGenre.FICTION,
      publisher: 'Little, Brown and Company',
      pageCount: 224,
      description: 'A novel about teenage angst and alienation in American society.',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/catcher-in-the-rye.jpg',
      bookUrl: 'https://example.com/catcher-in-the-rye.pdf',
      publicationDate: new Date('1951-07-16'),
      price: 15,
      studentsPrice: 10,
      numberOfBooksAvailable: 5,
      keywords: 'coming of age, classic literature',
      bookAvailability: BookAvailability.AVAILABLE_BOTH,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      coverImageFile: null,
      coverImageFileContentType: null,
      bookFile: null,
      bookFileContentType: 'application/pdf',
      categories: [],
    },
    {
      id: 2,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      isbn: '9780062316097',
      genre: BookGenre.HISTORY,
      publisher: 'Harper',
      pageCount: 464,
      description: 'Explores the history of mankind from the Stone Age to the modern age.',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/sapiens.jpg',
      bookUrl: 'https://example.com/sapiens.pdf',
      publicationDate: new Date('2014-02-10'),
      price: 20,
      studentsPrice: 15,
      numberOfBooksAvailable: 8,
      keywords: 'history, anthropology, evolution',
      bookAvailability: BookAvailability.AVAILABLE_BOTH,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      coverImageFile: null,
      coverImageFileContentType: null,
      bookFile: null,
      bookFileContentType: 'application/pdf',
      categories: [],
    },
    {
      id: 3,
      title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
      author: 'Ashlee Vance',
      isbn: '9780062301239',
      genre: BookGenre.FICTION,
      publisher: 'Ecco',
      pageCount: 400,
      description: 'Biography of Elon Musk, the entrepreneur and visionary behind Tesla and SpaceX.',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/elon-musk.jpg',
      bookUrl: 'https://example.com/elon-musk.pdf',
      publicationDate: new Date('2015-05-19'),
      price: 18,
      studentsPrice: 12,
      numberOfBooksAvailable: 3,
      keywords: 'entrepreneurship, technology, innovation',
      bookAvailability: BookAvailability.AVAILABLE_ONLINE_ONLY,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      coverImageFile: null,
      coverImageFileContentType: null,
      bookFile: null,
      bookFileContentType: 'application/pdf',
      categories: [],
    },
    {
      id: 4,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      isbn: '9780307474278',
      genre: BookGenre.FICTION,
      publisher: 'Doubleday',
      pageCount: 454,
      description: 'A thriller novel that involves a mystery related to Leonardo da Vinci.',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/da-vinci-code.jpg',
      bookUrl: 'https://example.com/da-vinci-code.pdf',
      publicationDate: new Date('2003-03-18'),
      price: 14,
      studentsPrice: 8,
      numberOfBooksAvailable: 6,
      keywords: 'mystery, thriller, conspiracy',
      bookAvailability: BookAvailability.UNAVAILABLE,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      coverImageFile: null,
      coverImageFileContentType: null,
      bookFile: null,
      bookFileContentType: 'application/pdf',
      categories: [],
    },
    {
      id: 5,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      isbn: '9780374533557',
      genre: BookGenre.HISTORY,
      publisher: 'Farrar, Straus and Giroux',
      pageCount: 512,
      description: 'Explores the dual systems of thinking: fast, intuitive thinking and slow, deliberate thinking.',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/thinking-fast-and-slow.jpg',
      bookUrl: 'https://example.com/thinking-fast-and-slow.pdf',
      publicationDate: new Date('2011-10-25'),
      price: 22,
      studentsPrice: 18,
      numberOfBooksAvailable: 4,
      keywords: 'psychology, decision making, cognitive science',
      bookAvailability: BookAvailability.RESERVED,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      coverImageFile: null,
      coverImageFileContentType: null,
      bookFile: null,
      bookFileContentType: 'application/pdf',
      categories: [],
    },
  ];

  learners: Learner[] = [
    {
      id: 1,
      firstName: 'محمد',
      lastName: 'علي',
      birthYear: 1990,
      email: 'john.doe@example.com',
      mobileNo: '1234567890',
      googleId: 'google-id-1',
      facebookId: 'facebook-id-1',
      appleId: 'apple-id-1',
      isBanned: false,
      verifiedByEmail: true,
      verifiedByMobileNo: false,
      imageFile: null,
      imageFileContentType: '',
      imageFileUrl: 'https://example.com/john-doe.jpg',
      nationalityCode: 'US',
      city: 'New York',
      address: '123 Main St',
      learnerType: LearnerType.INTERNAL_STUDENT,
      studentId: 'student-id-1',
      notes: 'Excellent student',
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      user: null,
    },
    {
      id: 2,
      firstName: 'سعيد',
      lastName: 'محمود',
      birthYear: 1985,
      email: 'jane.smith@example.com',
      mobileNo: '0987654321',
      googleId: 'google-id-2',
      facebookId: 'facebook-id-2',
      appleId: 'apple-id-2',
      isBanned: false,
      verifiedByEmail: true,
      verifiedByMobileNo: true,
      imageFile: null,
      imageFileContentType: '',
      imageFileUrl: 'https://example.com/jane-smith.jpg',
      nationalityCode: 'CA',
      city: 'Toronto',
      address: '456 Elm St',
      learnerType: LearnerType.INTERNAL_STUDENT,
      studentId: 'student-id-2',
      notes: 'Hardworking and diligent',
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      user: null,
    },
  ];

  bookBorrowRequests: BookBorrowRequest[] = [
    {
      id: 1,
      requestDate: new Date('2024-01-10'),
      collectDate: new Date('2024-01-15'),
      returnDate: new Date('2024-02-10'),
      bookBorrowRequestStatus: BookBorrowRequestStatus.PENDING,
      book: { id: 1 } as Book, // Reference to the book with id 1
      learner: { id: 1 } as Learner, // Reference to the learner with id 1
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 2,
      requestDate: new Date('2024-02-01'),
      collectDate: new Date('2024-02-05'),
      returnDate: new Date('2024-03-01'),
      bookBorrowRequestStatus: BookBorrowRequestStatus.APPROVED,
      book: { id: 2 } as Book, // Reference to the book with id 2
      learner: { id: 2 } as Learner, // Reference to the learner with id 2
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
  ];

  categories: Category[] = [
    {
      id: 1,
      nameAr: 'تكنولوجيا المعلومات',
      nameEn: 'Information Technology',
      menuOrder: 1,
      imageFileUrl: 'https://example.com/it.jpg',
      imageFile: null,
      imageFileContentType: '',
      notes: 'Category for IT related books and courses',
      isActive: true,
      books: [],
      courses: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 2,
      nameAr: 'الشبكات',
      nameEn: 'Networking',
      menuOrder: 2,
      imageFileUrl: 'https://example.com/networking.jpg',
      imageFile: null,
      imageFileContentType: '',
      notes: 'Category for networking related books and courses',
      isActive: true,
      books: [],
      courses: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 3,
      nameAr: 'برمجة',
      nameEn: 'Programming',
      menuOrder: 3,
      imageFileUrl: 'https://example.com/programming.jpg',
      imageFile: null,
      imageFileContentType: '',
      notes: 'Category for programming related books and courses',
      isActive: true,
      books: [],
      courses: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 4,
      nameAr: 'الهندسة المدنية',
      nameEn: 'Civil Engineering',
      menuOrder: 4,
      imageFileUrl: 'https://example.com/civil-engineering.jpg',
      imageFile: null,
      imageFileContentType: '',
      notes: 'Category for civil engineering related books and courses',
      isActive: true,
      books: [],
      courses: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 5,
      nameAr: 'الهندسة الكهربائية',
      nameEn: 'Electrical Engineering',
      menuOrder: 5,
      imageFileUrl: 'https://example.com/electrical-engineering.jpg',
      imageFile: null,
      imageFileContentType: '',
      notes: 'Category for electrical engineering related books and courses',
      isActive: true,
      books: [],
      courses: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
  ];

  paymentMethods: PaymentMethod[] = [
    {
      id: 1,
      nameAr: 'البطاقة المصرقية',
      nameEn: 'Local Credit Cards',
      menuOrder: 1,
      imageFileUrl: 'https://example.com/cash-on-delivery.jpg',
      imageFile: null,
      imageFileContentType: '',
      details: 'الدفع نقدا عند استلام الطلب',
      feePercentage: 0,
      paymentType: PaymentType.MOAMALAT,
      isActive: true,
      notes: 'خدمة الدفع عند الاستلام',
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 2,
      nameAr: 'ادفعلي',
      nameEn: 'Adfali',
      menuOrder: 2,
      imageFileUrl: 'https://example.com/credit-card.jpg',
      imageFile: null,
      imageFileContentType: '',
      details: 'الدفع بواسطة بطاقة ائتمانية',
      feePercentage: 2,
      paymentType: PaymentType.ADFALI,
      isActive: true,
      notes: 'خدمة الدفع بالبطاقة الائتمانية',
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 3,
      nameAr: 'سداد',
      nameEn: 'Sadad',
      menuOrder: 3,
      imageFileUrl: 'https://example.com/paypal.jpg',
      imageFile: null,
      imageFileContentType: '',
      details: 'الدفع بواسطة حساب PayPal',
      feePercentage: 3,
      paymentType: PaymentType.SADAD,
      isActive: true,
      notes: 'خدمة الدفع بواسطة PayPal',
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
  ];

  courses: Course[] = [
    {
      id: 1,
      title: 'React Native Course',
      description: 'Learn how to build mobile apps using React Native',
      price: 100,
      categories: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/react-native.jpg',
      coverImageFile: null,
      coverImageFileContentType: null,
      studentsPrice: 80,
      keywords: 'mobile development, cross-platform',
    },
    {
      id: 2,
      title: 'Angular Course',
      description: 'Learn how to build web apps using Angular',
      price: 150,
      categories: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/react-native.jpg',
      coverImageFile: null,
      coverImageFileContentType: null,
      studentsPrice: 80,
      keywords: 'mobile development, cross-platform',
    },
    {
      id: 3,
      title: 'Node.js Course',
      description: 'Learn how to build server-side apps using Node.js',
      price: 120,
      categories: [],
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      language: Language.ENGLISH,
      coverImageUrl: 'https://example.com/react-native.jpg',
      coverImageFile: null,
      coverImageFileContentType: null,
      studentsPrice: 80,
      keywords: 'mobile development, cross-platform',
    },
  ];

  orders: Order[] = [
    {
      id: 1,
      orderNo: 'ORD-123',
      total: 100,
      discount: 10,
      paymentType: PaymentType.MOAMALAT,
      orderStatus: OrderStatus.PAYED,
      payedAt: new Date('2024-01-10'),
      notes: 'Order pending payment',
      learner: { id: 1 } as Learner,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
    {
      id: 2,
      orderNo: 'ORD-456',
      total: 150,
      discount: 20,
      paymentType: PaymentType.ADFALI,
      orderStatus: OrderStatus.PENDING,
      payedAt: new Date('2024-02-01'),
      notes: 'Order paid successfully',
      learner: { id: 1 } as Learner,
      createdBy: 'admin',
      lastModifiedBy: 'admin',
    },
  ];

  // eslint-disable-next-line
  public async up(queryRunner: QueryRunner): Promise<any> {
    const bookRepository = getRepository('book');
    await bookRepository.save(this.books);

    const learnerRepository = getRepository('learner');
    await learnerRepository.save(this.learners);

    const bookBorrowRequestRepository = getRepository('book_borrow_request');
    await bookBorrowRequestRepository.save(this.bookBorrowRequests);

    const categoryRepository = getRepository('category');
    await categoryRepository.save(this.categories);

    const paymentMethodRepository = getRepository('payment_method');
    await paymentMethodRepository.save(this.paymentMethods);

    const courseRepository = getRepository('course');
    await courseRepository.save(this.courses);

    const orderRepository = getRepository('order');
    await orderRepository.save(this.orders);
  }

  // eslint-disable-next-line
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
