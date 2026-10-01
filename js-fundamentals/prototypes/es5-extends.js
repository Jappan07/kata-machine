function myExtends(Supertype, Subtype){
    // instance properties
    function ExtendedType(args){
        Supertype.apply(this, args)
        Subtype.apply(this, args)
    }

    // instance methods
    Object.setPrototypeOf(SubType.prototype, Supertype.prototype)
    ExtendedType.prototype = Object.create(Subtype.prototype)

    // restore the constuctor of ExtendedType since it has been changed to Subtype
    ExtendedType.prototype.constructor = ExtendedType

    // static methods
    Object.setPrototypeOf(ExtendedType,Supertype)

    return ExtendedType
}




export {}
